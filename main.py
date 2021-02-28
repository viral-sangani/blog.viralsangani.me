from os import listdir
from os.path import isfile, join
from os import walk
import json
import boto3
import sys

def checkBlogSSMLInS3():
    s3 = boto3.resource('s3')
    bucket= s3.Bucket(name="polly-blog-data")
    pollyListFromS3 = []
    for obj in bucket.objects.filter():
        pollyListFromS3.append(obj.key.split(".")[0])

    pollyTextPath = "./content/polly"
    for (dirpath, dirnames, filenames) in walk(pollyTextPath):
        for dir in dirnames:
            if dir not in pollyListFromS3:
                print(dir)
                polly_handler({"dirName": dir, "dirPrefix": pollyTextPath})
            else:
                pass
        break

def polly_handler(event):
    try:
        polly = boto3.client("polly")
        dirName = event['dirName']
        dirPrefix = event['dirPrefix']
        data = open(dirPrefix + "/" + dirName + "/index.txt", 'r').read()
        response = polly.start_speech_synthesis_task(
            Engine='standard',
            Text=data,
            TextType="text",
            OutputFormat="mp3", 
            VoiceId="Joanna", 
            OutputS3BucketName="polly-blog-data", 
            OutputS3KeyPrefix=dirName, 
        )
        taskId = response['SynthesisTask']['TaskId']
        task_status = polly.get_speech_synthesis_task(TaskId = taskId)
        while task_status['SynthesisTask']['TaskStatus'] == "scheduled" or task_status['SynthesisTask']['TaskStatus'] == "inProgress":
            task_status = polly.get_speech_synthesis_task(TaskId = taskId)

        task_status = polly.get_speech_synthesis_task(TaskId = taskId)
        if task_status['SynthesisTask']['TaskStatus'] == 'failed':
            return { 'status': "Failed" }
        elif task_status['SynthesisTask']['TaskStatus'] == 'completed':
            delete_s3(response['SynthesisTask']['OutputUri'])
            return { 'status': "Success" }
        else:
            return { 'status': "Failed" }
    except:
        print(sys.exc_info()[0])
        return {
            'body': "Error"
        }

def delete_s3(pollyUri):
    s3 = boto3.resource('s3')
    filename = pollyUri.split("/")[-1]
    s3.Object('polly-blog-data',filename.split(".")[0]+".mp3").copy_from(CopySource='polly-blog-data/{}'.format(filename))
    s3.Object('polly-blog-data',filename).delete()


if __name__ == "__main__":
    checkBlogSSMLInS3()
