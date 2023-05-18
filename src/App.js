import React from "react";
import "./App.css";
import MenuAppBar from "./component/navbar/Navbar";
// import RecipeReviewCard from "./component/NewsCart.jsx";
import FetchData from "./fetch/fetchData";

import Search from "./component/search/Search.jsx"
import Load from "./component/Load";
import { DataContext } from "./context/DataContext";
import { useContext } from "react";
import Sidebar from "./component/sidebar/Sidebar";



//  API KEY = 2da948ccccd347f39e9e6b0d28e39a0f


const App = () => {
  const {loading}=useContext(DataContext)
  console.log(loading);
  return (
    <div className="look">
    <MenuAppBar/>
    <div className="design">
<div className="design-1">
<Sidebar/>

</div>
<div className="design-2">


<Search/>
{loading && <Load/> }
 
 <FetchData/>

</div>
    
    </div>

    </div>
  )
}

export default App
