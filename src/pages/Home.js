import React from "react" ; 
// import ReactDOM from "react-domn/client" ; 
import './Home.css' ; 
import { Link } from "react-router-dom";
import AppsIcon from "@mui/icons-material/Apps" ; 
import Avatar  from "@mui/material/Avatar";
import Search from "./Search.js";
import './Search.js' ; 

const Home = () => {
     return (
        <div>
            {/* <h1>This is HOMEPAGE</h1> */}
            <div className="home__header">
                <div className="home__headerLeft">
                    <Link to ="/about">About</Link>
                    <Link to ="/store">Search</Link>
                    {/* <h1>fuck</h1>
                     */}
                </div>
                <div className="home__headerRight">
                    <Link to ="/gmail">Gmail</Link>
                    <Link to ="/images">Images</Link>
                    <AppsIcon/>
                    <Avatar/>
                </div>

            </div>
            <div className="home__body">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" srcset="" />
                <div className="searchContainer">
                    <Search/>
                </div>
            </div>

        </div>
     )
}


export default Home ; 