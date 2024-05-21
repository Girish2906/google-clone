import './Search.css' ; 
import SearchIcon from "@mui/icons-material/Search" ; 
import MicIcon from  "@mui/icons-material/Mic" ; 
import Button from '@mui/material/Button';
import { useState } from 'react';
import {useNavigate} from "react-router-dom" ; 
import { useStateValue } from "../StateProvider.js";
import { actionTypes } from '../reducer.js';

const Search = ({hideButtons = false}) => {
    const [{} , dispatch] = useStateValue() ; 
    let navigate = useNavigate();
    const [input , setInput] = useState() ; 
    const search = (e) => {
         e.preventDefault() ; 
         console.log("You just hit the search button" , input) ; 
         navigate('/search') ; 
         dispatch({
            type: actionTypes.SET_SEARCH_TERM , 
            term: input
         }) ; 
    }

    return (
        <form className="search">
            <div className='search__input'>
                <SearchIcon className='search_inputIcon' />
                <input type="text" value = {input} onChange={e => setInput(e.target.value)} />
                <MicIcon/>
            </div>
            {
                hideButtons == true ? (
                    <div className="search__buttons">
                    <Button type='submit' onClick={search} variant = "outlined">Google Search</Button>
                    <Button variant = "outlined">I'm feeling lucky</Button>
                </div>
                ) : (
                    <div className="search__buttons">
                    <Button className = "search_buttonsHidden" type='submit' onClick={search} variant = "outlined">Google Search</Button>
                    <Button className = "search_buttonsHidden" variant = "outlined">I'm feeling lucky</Button>
                </div>
                )
            }
        </form>
    )
} ; 

export default Search ; 