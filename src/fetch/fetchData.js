// here we are going to fetch data from the news Api first we need the api key then the url

import React, { useContext } from 'react'
import { useState, useEffect } from 'react';
import RecipeReviewCard from '../component/NewsCart.jsx';
import "./fetch.css"
import { DataContext } from '../context/DataContext.js';

const FetchData = () => {

  
// get data from our context
const { search, filteredArticles}=useContext(DataContext)

    return (
      <div>
    

        
        <div className="item">
          {filteredArticles.map((article) => (
        <div className="article" >
            
            <RecipeReviewCard key={ article.id} title={article.title} url= {article.url} description={article.description} urlToImage={ article.urlToImage}  search={search} author={article.author} source={article.source} content={article.content}/>
            </div>
            
            
          ))}
        </div>
      </div>
    );
};

export default FetchData