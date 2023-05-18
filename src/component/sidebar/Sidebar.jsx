import React from 'react'
import "./Sidebar.css"
import {useState} from "react";
import Search from '../search/Search';
import NewsCart from "../NewsCart.jsx"

const Sidebar = () => {
    const [category, setCategory]=useState("");
  return (
    <div className='sidebar'>

<div className="top">
<div className="title">GITNEWS.com</div>
<p className='description'>welcome to the best news app in town</p>
</div>
<div className="middle">
<div className="select">
<label htmlFor="category">Category</label>
<select name="" id="category" value={category}>
<option value="general">General</option>
<option value="business">Business</option>
<option value="entertainment">Entertainment</option>
<option value="health">Health</option>
<option value="science">Science</option>
<option value="sport">Technology</option>

</select>
</div>

<Search/>
<NewsCart/>


</div>
<div className="bottom"></div>    
    
    </div>
  )
}

export default Sidebar