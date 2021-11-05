import React from 'react'
import { graphql } from 'gatsby'
import get from 'lodash/get'

import Seo from '../components/seo'
import Layout from '../components/layout'
import Hero from '../components/hero'
import ArticlePreview from '../components/article-preview'
import SearchBar from '../components/searchbar'
import algoliasearch from 'algoliasearch'
import {
    InstantSearch,
    Hits,
    SearchBox,
    RefinementList,
    Pagination, 
    Stats
  } from 'react-instantsearch-dom';
  // Include only the reset
import 'instantsearch.css/themes/reset.css';
// or include the full Satellite theme
import 'instantsearch.css/themes/satellite.css';
import SearchArticlePreview from '../components/search-article-preview'
import Container from '../components/container'

class BlogIndex extends React.Component {
  render() {
    const searchClient = algoliasearch(process.env.GATSBY_YOUR_ALGOLIA_APP_ID, process.env.GATSBY_YOUR_ALGOLIA_SEARCH_KEY);

    return (
      <Layout location={this.props.location}>
        <Seo title="Blog" />
        <Container>
            <InstantSearch searchClient={searchClient} indexName="blog-post">
                <div className="left-panel" style={{display: "inline-block", width: "20%", verticalAlign: "top"}}>
                    <h2> Filters</h2>
                    <h2>Author</h2>
                    <RefinementList attribute="author.name" />
                    <h2>Tags</h2>
                    <RefinementList attribute="tags" />
                </div>
                <div className="right-panel" style={{ display: "inline-block", width: "80%", verticalAlign: "top"}}>
                    <SearchBox translations={{placeholder: 'Search for blog'}}/>
                    <Stats />
                    <Hits hitComponent={SearchArticlePreview}  />
                    <Pagination />
                </div>
            
            </InstantSearch>
        </Container>
      </Layout>
    )
  }
}

export default BlogIndex