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
                <div
                    className="col-xs-12  mb-xs-40 mb-md-80"
                    style={{ textAlign: 'center' }}
                >
                    <FacebookShareButton
                        quote={title}
                        url={`https://blog.viralsangani.me/posts${slug}`}
                    >
                        <FacebookIcon
                            style={{
                                fontSize: '50px',
                                color: 'var(--font-color)',
                            }}
                        />
                    </FacebookShareButton>
                    <LinkedinShareButton
                        title={title}
                        summary={excerpt}
                        source={`blog.viralsangani.me`}
                        url={`https://blog.viralsangani.me/posts${slug}`}
                    >
                        <LinkedInIcon
                            style={{
                                fontSize: '50px',
                                color: 'var(--font-color)',
                            }}
                        />
                    </LinkedinShareButton>
                    <TwitterShareButton
                        title={title}
                        related={['ViralSangani5']}
                        url={`https://blog.viralsangani.me/posts${slug}`}
                    >
                        <TwitterIcon
                            style={{
                                fontSize: '50px',
                                color: 'var(--font-color)',
                            }}
                        />
                    </TwitterShareButton>
                    <WhatsappShareButton
                        title={title}
                        separator={'|'}
                        url={`https://blog.viralsangani.me/posts${slug}`}
                    >
                        <WhatsAppIcon
                            style={{
                                fontSize: '50px',
                                color: 'var(--font-color)',
                            }}
                        />
                    </WhatsappShareButton>
                    <TelegramShareButton
                        title={title}
                        url={`https://blog.viralsangani.me/posts${slug}`}
                    >
                        <TelegramIcon
                            style={{
                                fontSize: '50px',
                                color: 'var(--font-color)',
                            }}
                        />
                    </TelegramShareButton>
                </div>
            </div>
        </React.Fragment>
    )
}
