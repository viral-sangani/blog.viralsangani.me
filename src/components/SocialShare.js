import React from 'react'
import FacebookIcon from '@material-ui/icons/Facebook'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import TwitterIcon from '@material-ui/icons/Twitter'
import WhatsAppIcon from '@material-ui/icons/WhatsApp'
import TelegramIcon from '@material-ui/icons/Telegram'
import {
  FacebookShareButton,
  LinkedinShareButton,
  TwitterShareButton,
  WhatsappShareButton,
  TelegramShareButton,
} from 'react-share'

export default function SocialShare({ slug, title, excerpt }) {
  return (
    <React.Fragment>
      <div className="row">
        <div className="" style={{ textAlign: 'center' }}>
          <FacebookShareButton
            quote={title}
            url={`https://blog.viralsangani.me/posts${slug}`}
          >
            <FacebookIcon
              className="text-light-font dark:text-dark-font hover:text-light-primary dark:hover:text-dark-primary"
              style={{ fontSize: '50px' }}
            />
          </FacebookShareButton>
          <LinkedinShareButton
            title={title}
            summary={excerpt}
            source={`blog.viralsangani.me`}
            url={`https://blog.viralsangani.me/posts${slug}`}
          >
            <LinkedInIcon
              className="text-light-font dark:text-dark-font hover:text-light-primary dark:hover:text-dark-primary"
              style={{ fontSize: '50px' }}
            />
          </LinkedinShareButton>
          <TwitterShareButton
            title={title}
            related={['ViralSangani5']}
            url={`https://blog.viralsangani.me/posts${slug}`}
          >
            <TwitterIcon
              className="text-light-font dark:text-dark-font hover:text-light-primary dark:hover:text-dark-primary"
              style={{ fontSize: '50px' }}
            />
          </TwitterShareButton>
          <WhatsappShareButton
            title={title}
            separator={'|'}
            url={`https://blog.viralsangani.me/posts${slug}`}
          >
            <WhatsAppIcon
              className="text-light-font dark:text-dark-font hover:text-light-primary dark:hover:text-dark-primary"
              style={{ fontSize: '50px' }}
            />
          </WhatsappShareButton>
          <TelegramShareButton
            title={title}
            url={`https://blog.viralsangani.me/posts${slug}`}
          >
            <TelegramIcon
              className="text-light-font dark:text-dark-font hover:text-light-primary dark:hover:text-dark-primary"
              style={{ fontSize: '50px' }}
            />
          </TelegramShareButton>
        </div>
      </div>
    </React.Fragment>
  )
}
