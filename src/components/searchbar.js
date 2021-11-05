import React from 'react'
import algoliasearch from 'algoliasearch'
import {
    InstantSearch,
    Hits,
    SearchBox,
  } from 'react-instantsearch-dom';
//   <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/instantsearch.css@7.3.1/themes/reset-min.css" integrity="sha256-t2ATOGCtAIZNnzER679jwcFcKYfLlw01gli6F6oszk8=" crossorigin="anonymous">

  
//const { InstantSearch, SearchBox, Hits } = ReactInstantSearchDOM;

const searchClient = algoliasearch('88IVVBSS0A', '4a4c241d16358f8c4f2de8e1819a3065');

export default function Searchbar() {
  return <InstantSearch searchClient={searchClient} indexName="blog-post">
    <SearchBox />
    <Hits />
  </InstantSearch>
};