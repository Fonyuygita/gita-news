import React from 'react'
import "./Search.css"
import { SearchOutlined } from '@material-ui/icons'

const Search = () => {
  return (
    <div className='input'>
    <input type="text" name="" id="" placeholder='search....'/>
<button type="submit"><SearchOutlined/> </button>
    </div>
  )
}

export default Search