import React from "react";
import "./App.css";
import MenuAppBar from "./component/navbar/Navbar";
import RecipeReviewCard from "./component/NewsCart.jsx";
import FetchData from "./fetch/fetchData";


//  API KEY = 2da948ccccd347f39e9e6b0d28e39a0f


const App = () => {
  return (
    <div>
    <MenuAppBar/>
    
    <FetchData/>
    </div>
  )
}

export default App
