// here we are going to fetch data from the news Api first we need the api key then the url

import React from 'react'
import { useState, useEffect } from 'react';

const FetchData = () => {

    const [articles, setArticles] = useState([]);
    const [search, setSearch] = useState('');
  
    useEffect(() => {
      const apiKey = 'YOUR_API_KEY';
      const url = `https://newsapi.org/v2/top-headlines?country=us&apiKey=${apiKey}`;
  
      fetch(url)
        .then((response) => response.json())
        .then((data) => setArticles(data.articles));
    }, []);
  
    const filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(search.toLowerCase())
    );
  
    return (
      <div>
        <input
          type="text"
          placeholder="Search for news..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        <ul>
          {filteredArticles.map((article) => (
            <li key={article.url}>
              <a href={article.url} target="_blank" rel="noopener noreferrer">
                {article.title}
              </a>
            </li>
          ))}
        </ul>
      </div>
    );
};

export default FetchData