// here we are going to fetch data from the news Api first we need the api key then the url

import React from 'react'
import { useState, useEffect } from 'react';
import RecipeReviewCard from '../component/NewsCart.jsx';
import "./fetch.css"

const FetchData = () => {

    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');

    useEffect(() => {
     
    
const url=process.env.REACT_APP_API_KEY;
    
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => setArticles(data.articles));
    }, []);
    console.log(articles);
  
  
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div>
    

        
        <div className="item">
          {filteredArticles.map((article) => (
        <div className="article" >
            
            <RecipeReviewCard key={ article.id} title={article.title} url= {article.url} description={article.description} urlToImage={ article.urlToImage} setSearch={setSearch} search={search} author={article.author} source={article.source} content={article.content}/>
            </div>
            
            
          ))}
        </div>
      </div>
    );
};

export default FetchData