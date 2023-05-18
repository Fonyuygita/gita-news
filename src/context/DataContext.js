import { useContext, useState, useEffect, createContext } from "react";

export const DataContext=createContext();

export const DataContextProvider=({children})=>{
    // api key and stuff
    
   const url= `https://newsapi.org/v2/everything?q=apple&from=2023-05-10&to=2023-05-10&sortBy=popularity&apiKey=${process.env.REACT_APP_API_KEY}`;

    const [articles, setArticles] = useState([]);
const [search, setSearch] = useState('');
const [loading, setIsLoading]=useState(true)

useEffect(() => {
 




  fetch(url)
    .then((response) => response.json())
    .then((data) =>{
        setArticles(data.articles) 
        setIsLoading(false);
    
    } );
    
}, []);







const filteredArticles = articles.filter((article) =>
  article.title.toLowerCase().includes(search.toLowerCase())
);

return (
<DataContext.Provider value={{articles, search, filteredArticles,loading, setSearch }}>{children}</DataContext.Provider>
)

}


