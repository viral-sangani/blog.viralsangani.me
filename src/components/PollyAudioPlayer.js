import React, { useRef, useState } from 'react'
import AudioPlayer from 'react-h5-audio-player'
import 'react-h5-audio-player/lib/styles.css'
import PlayArrowIcon from '@material-ui/icons/PlayArrow'
import PauseIcon from '@material-ui/icons/Pause'

const PollyAudioPlayer = ({ slug }) => {
  slug = slug.substring(1)
  slug = slug.substring(0, slug.length - 1)
  const [isPlaying, setIsPlaying] = useState(false)
  const player = useRef()
  return (
    <div style={{ paddingBottom: 40, borderRadius: 20 }}>
      <AudioPlayer
        ref={player}
        layout="horizontal"
        customAdditionalControls={[]}
        autoPlayAfterSrcChange={false}
        src={`https://polly-blog-data.s3.ap-south-1.amazonaws.com/${slug}.mp3`}
        showDownloadProgress
        onPlay={(e) => setIsPlaying(true)}
        onPause={(e) => setIsPlaying(false)}
        header={
          <div
            style={{
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}
          >
            <h4 style={{ color: 'black', fontWeight: 800 }}>
              <span role="img" aria-label="headphones">
                🎧
              </span>
              &nbsp;&nbsp; Listen blog while reading &nbsp;&nbsp;
              <span role="img" aria-label="headphones">
                🎧
              </span>
            </h4>
          </div>
        }
      />
      <button
        style={{
          position: 'fixed',
          bottom: '40px',
          right: '40px',
          width: '60px',
          height: '60px',
          backgroundColor: '#777',
          borderRadius: '50px',
          textAlign: 'center',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
        onClick={() => {
          isPlaying
            ? player.current.audio.current.pause()
            : player.current.audio.current.play()
        }}
      >
        {isPlaying ? (
          <PauseIcon
            color="white"
            style={{
              fontSize: '50px',

              color: 'white',
            }}
          />
        ) : (
          <PlayArrowIcon
            color="white"
            style={{
              fontSize: '50px',

              color: 'white',
            }}
          />
        )}
      </button>
    </div>
  )
}

export default PollyAudioPlayer
