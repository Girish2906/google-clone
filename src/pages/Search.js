import './Search.css' ; 
import SearchIcon from "@mui/icons-material/Search" ; 
import MicIcon from  "@mui/icons-material/Mic" ; 
import Button from '@mui/material/Button';
import { useState } from 'react';
import {useNavigate} from "react-router-dom" ; 

const Search = () => {
    let navigate = useNavigate();
    const [input , setInput] = useState() ; 
    const search = (e) => {
         e.preventDefault() ; 
         console.log("You just hit the search button" , input) ; 
         navigate('/search') ; 
    }

    return (
        <form className="search">
            <div className='search__input'>
                <SearchIcon className='search_inputIcon' />
                <input type="text" value = {input} onChange={e => setInput(e.target.value)} />
                <MicIcon/>
            </div>
            <div className="search__buttons">
                <Button type='submit' onClick={search} variant = "outlined">Google Search</Button>
                <Button variant = "outlined">I'm feeling lucky</Button>
            </div>
        </form>
    )
} ; 

export default Search ; 