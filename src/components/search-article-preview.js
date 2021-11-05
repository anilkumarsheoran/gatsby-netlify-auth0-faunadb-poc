import React from 'react'
import * as styles from './article-preview.module.css'
import Link from 'gatsby-link'
import Tags from './tags'
import { GatsbyImage } from 'gatsby-plugin-image'

export default function SearchArticlePreview({ hit }){

    return (
    
     
           <div>
                <Link to={`/blog/${hit.slug}`} className={styles.link}>
                  <GatsbyImage alt="" image={hit.heroImage.gatsbyImageData} />
                  <h2 className={styles.title}>{hit.title}</h2>
                </Link>
                <div
                  dangerouslySetInnerHTML={{
                    __html: hit.description.childMarkdownRemark.html,
                  }}
                />
                <div className={styles.meta}>
                  <small className="meta">{hit.publishDate}</small>
                  <Tags tags={hit.tags} />
                </div>
            </div>
            
        )   
}