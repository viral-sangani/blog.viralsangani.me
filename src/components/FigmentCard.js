import React from 'react'
import Web3Tags from './Web3Tags'
import FigmentTags from './Web3Tags'

const FigmentCard = ({
  url,
  title,
  description,
  created,
  tags,
  timeToRead,
}) => {
  return (
    <section className="md:w-6/12 lg:w-6/12 w-full px-2">
      <div className="flex flex-col flex-wrap bg-light-backgroundSecondary dark:bg-dark-backgroundSecondary p-4 mx-1 my-4 rounded-2xl border-2 border-transparent hover:border-light-primary dark:hover:border-dark-primary">
        <div className="w-full pr-4">
          <header className="mt-3">
            <div className="flex flex-row justify-between mb-5 items-center">
              <div>
                <time className="text-light-fontShadowSecondary dark:text-dark-fontShadowSecondary text-lg">
                  {created} &mdash;
                </time>
                <span className="text-light-primary dark:text-dark-primary text-lg">
                  &nbsp;&nbsp;{timeToRead} ☕
                </span>
              </div>
              <a
                href="https://learn.figment.io/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src="https://learn.figment.io/_next/image?url=%2Fimages%2Flogo-main.svg&w=1920&q=75"
                  className="w-36"
                />
              </a>
            </div>
            <h2 className="mt-0 pb-6">
              <a
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="title__link text-3xl"
              >
                {title}
              </a>
            </h2>
          </header>
          <section className="">
            <p
              className="text-xl text-light-font dark:text-dark-font line-clamp-4"
              dangerouslySetInnerHTML={{
                __html: description,
              }}
            />
          </section>
          <footer className="mb-4 mt-5">
            <div id="all-tags">
              <Web3Tags tags={tags} />
            </div>
          </footer>
        </div>
      </div>
    </section>
  )
}

export default FigmentCard
