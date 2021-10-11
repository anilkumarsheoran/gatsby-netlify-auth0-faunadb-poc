import React from 'react'
import  Link  from 'gatsby-link'
import { GatsbyImage } from 'gatsby-plugin-image'

import Container from './container'
import Tags from './tags'
import * as styles from './article-preview.module.css'
import { useAuth0 } from '@auth0/auth0-react';
import Loader from "react-loader-spinner";
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const ArticlePreview = ({ posts }) => {
  const {isAuthenticated, isLoading} = useAuth0();
  if (!posts) return null
  if (!Array.isArray(posts)) return null
 
  if (isLoading) {
    return <div style={{ textAlign: 'center' }}><Loader
    type="Circles" color="#00BFFF" height={80} width={80}
    /></div>;
  }
  return (
    <Container>
      <ul className={styles.articleList}>
        {posts.map((post) => {

          if((!post.authRequired && !isAuthenticated) || (isAuthenticated && post.authRequired)){
            return (
              <li key={post.slug}>
                <Link to={`/blog/${post.slug}`} className={styles.link}>
                  <GatsbyImage alt="" image={post.heroImage.gatsbyImageData} />
                  <h2 className={styles.title}>{post.title}</h2>
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: post.description.childMarkdownRemark.html,
                  }}
                />
                <div className={styles.meta}>
                  <small className="meta">{post.publishDate}</small>
                  <Tags tags={post.tags} />
                </div>
              </li>
            )
          }
        })}
      </ul>
    </Container>
  )
}

export default ArticlePreview
