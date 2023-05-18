import React from 'react'
import "./Search.css"
import { SearchOutlined } from '@material-ui/icons'
import {useContext} from  "react"
import { DataContext } from '../../context/DataContext'


const Search = () => {
// search from context
const {setSearch, search}=useContext(DataContext)

  return (
    <div className='input'>
    <input type="text" name="" id="" placeholder='search....' value={search} onChange={e=>setSearch(e.target.value)} />
<button type="submit"><SearchOutlined/> </button>
    </div>
  )
}

export default Search