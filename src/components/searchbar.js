import React from 'react'
import algoliasearch from 'algoliasearch'
import {
    InstantSearch,
    Hits,
    SearchBox,
  } from 'react-instantsearch-dom';

  
const searchClient = algoliasearch(process.env.GATSBY_YOUR_ALGOLIA_APP_ID, process.env.GATSBY_YOUR_ALGOLIA_SEARCH_KEY);

export default function Searchbar() {
  return <InstantSearch searchClient={searchClient} indexName="blog-post">
    <SearchBox />
    <Hits />
  </InstantSearch>
};