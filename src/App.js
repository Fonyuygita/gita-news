import React from "react";
import "./App.css";
import MenuAppBar from "./component/navbar/Navbar";
// import RecipeReviewCard from "./component/NewsCart.jsx";
import FetchData from "./fetch/fetchData";

import Search from "./component/search/Search.jsx"
import Load from "./component/Load";
import { DataContext } from "./context/DataContext";
import { useContext } from "react";



//  API KEY = 2da948ccccd347f39e9e6b0d28e39a0f


const App = () => {
  const {loading}=useContext(DataContext)
  console.log(loading);
  return (
    <div>
    <MenuAppBar/>
    <Search/>
   {loading && <Load/> }
    
    <FetchData/>
    </div>
  )
}

export default App
