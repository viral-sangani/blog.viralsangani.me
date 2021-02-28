import React from 'react'
import { Link } from 'gatsby'
import BlogComment from './BlogComment'
import Tags from './Tags'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import RenderMdx from './RederMdx'
import SocialShare from './SocialShare'
import ClapButton from 'react-clap-button'
import axios from 'axios'
import ThumbUpAltIcon from '@material-ui/icons/ThumbUpAlt'
import Subscribe from './Subscribe'
import PollyAudioPlayer from './PollyAudioPlayer'

const BlogDetail = ({
  excerpt,
  slug,
  title,
  created,
  image,
  content,
  previous,
  next,
  tags,
  id,
  timeToRead,
}) => {
  const [likes, setLikes] = React.useState({
    totalLikes: 0,
    userLikes: 0,
    loading: true,
  })
  React.useEffect(() => {
    axios
      .get(
        `https://ux28cjiz1f.execute-api.ap-south-1.amazonaws.com/dev/api/blog/get?slug=${slug}`
      )
      .then((res) => {
        setLikes({
          totalLikes: res.data.totalLikes,
          userLikes: res.data.userLikes,
          loading: false,
        })
      })
  }, [slug])

  const onCountChange = () => {
    axios.get(
      `https://ux28cjiz1f.execute-api.ap-south-1.amazonaws.com/dev/api/blog/set?slug=${slug}`
    )
  }
  return (
    <main className="main">
      <section className="container--blog mt-xs-20 mt-sm-40">
        <Link to="/" style={{ paddingBottom: '20px' }}>
          <div className="back-btn">⤆ Go Back</div>
        </Link>
        <div className="row">
          <div className="col-xs-12 mb-xs-40 mb-md-80">
            <header className="content-item__header">
              {/* <figure
                className="content-item__image image mb-xs-60"
                data-component="image"
              >
                <span className="image__content">
                  <Img
                    Tag="div"
                    className="image__img_blog"
                    fluid={image}
                    backgroundColor={`#007ACC`}
                  />
                </span>
              </figure> */}
              <h1 className="title__link">{title}</h1>
              <p className="content-item__subtitle">
                <time
                  className="content-item__date"
                  dateTime=""
                  itemProp="datePublished"
                >
                  {created}{' '}
                </time>
                &mdash; {timeToRead} min read ☕
              </p>
              <div className="row">
                <div id="all-tags">
                  <Tags tags={tags} />
                </div>
              </div>
            </header>

            <PollyAudioPlayer slug={slug} />
            {/* <div
                            className="post-content"
                            dangerouslySetInnerHTML={{ __html: content }}
                        /> */}

            <RenderMdx>
              <MDXRenderer>{content}</MDXRenderer>
            </RenderMdx>
            <div className="content-item__body user-content"></div>

            <ul
              style={{
                display: 'flex',
                flexWrap: 'wrap',
                justifyContent: 'space-between',
                listStyle: 'none',
                padding: 0,
              }}
            >
              {previous && (
                <li>
                  <Link to={`posts/${previous.fields.slug}`} rel="prev">
                    ← {previous.frontmatter.title}
                  </Link>
                </li>
              )}

              {next && (
                <li>
                  <Link to={`posts/${next.fields.slug}`} rel="next">
                    {next.frontmatter.title} →
                  </Link>
                </li>
              )}
            </ul>
          </div>
        </div>
      </section>

      <div className="container--blog mt-sm-20 mb-xs-120">
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          {!likes.loading && (
            <div style={{ marginRight: '20px' }}>
              <ClapButton
                count={likes.userLikes}
                countTotal={likes.totalLikes}
                maxCount={10}
                onCountChange={onCountChange}
                iconComponent={(props) => (
                  <ThumbUpAltIcon
                    {...props}
                    style={{
                      fontSize: '40px',
                      color: 'var(--hover-color)',
                    }}
                  />
                )}
              />
            </div>
          )}

          <div>
            <SocialShare slug={slug} excerpt={excerpt} title={title} />
          </div>
        </div>
        <BlogComment title={title} id={id} />
        <Subscribe />
      </div>
    </main>
  )
}

export default BlogDetail
