import { useStateValue } from "../StateProvider";
import useGoogleSearch from "./useGoogleSearch";
import response from "../response";
import { Link } from "react-router-dom";
import './SearchPage.css' ; 
import Search from "./Search";
import SearchIcon from '@mui/icons-material/Search'; 
import DescriptionIcon from '@mui/icons-material/Description';
import ImageIcon from '@mui/icons-material/Image';
import LocalOfferIcon from '@mui/icons-material/LocalOffer';
import RoomIcon from '@mui/icons-material/Room';
import MoreVertIcon from '@mui/icons-material/MoreVert';

const SearchPage = (props) => {
    const [{term='tesla'} , dispatch] = useStateValue() ; 
    // live API call
    const {data} = useGoogleSearch(term) ; 
    console.log("this si data" , data) ; 
    if(data === undefined){
        return (
            <div></div>
        )
    }
    const {hideButtons} = props ; 
    console.log(hideButtons) ; 
    // const data = response ; 
    console.log(data) ; 
    return (
        <div className="searchPage">
            <div className="searchPage__header">
                <Link to = "/">
                    <img className="searchPage__Logo" 
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/1200px-Google_2015_logo.svg.png" alt="" />
                </Link>
            </div>
            <div className="searchPage__HeaderBody">
                <Search hideButtons/>

            </div>
            <div className="searchPage__options">
                <div className="searchPage_optionsLeft">
                    <div className="searchPage__Option">
                        <SearchIcon/>
                        <Link to = "/all">All</Link>
                    </div>
                    <div className="searchPage__Option">
                        <DescriptionIcon/>
                        <Link to = "/all">All</Link>
                    </div>
                    <div className="searchPage__Option">
                        <ImageIcon/>
                        <Link to = "/all">All</Link>
                    </div>
                    <div className="searchPage__Option">
                        <LocalOfferIcon/>
                        <Link to = "/all">All</Link>
                    </div>
                    <div className="searchPage__Option">
                        <RoomIcon/>
                        <Link to = "/all">All</Link>
                    </div>
                    <div className="searchPage__Option">
                        <MoreVertIcon/>
                        <Link to = "/all">All</Link>
                    </div>
                </div>
                <div className="searchPage_optionsRight">
                <div className="searchPage__Option">
                        <Link to = "/settings">Settings</Link>

                    </div>
                    <div className="searchPage__Option">
                        <Link to = "/tools">Tools</Link>

                    </div>

                </div>
            </div>
            {console.log(data) }
            { term &&
                (
                    <div className="searchPage__results">
                        <p className="searchPage__resultCount">
                            About {data?.searchInformation?.totalResults} in {data?.searchInformation?.formattedSearchTime} seconds for {term}
                        </p> 
                        {
                            data.items.map((item) => (
                                <div className="searchPage__result">
                                    {/* <img src={item.pagemap.cse_image.length > 0 ? item.pagemap.cse_image[0].src :  } alt="" /> */}
                                    <a className="searchPage__resultLink" href={item.link}>
                                        {
                                            item?.pagemap?.cse_image?.length > 0 && item?.pagemap?.cse_image[0]?.src && (
                                                <img  className="searchPage__resultImage" src={item.pagemap?.cse_image[0]?.src} alt="" />
                                            )
                                        } 
                                     {item.displayLink}</a>
                                    <a className="searchPage_resultTitle" href={item.link}>
                                        <h2>{item.title}</h2>
                                    </a>
                                    <p className="SearchPage__resultSnippet">
                                        {item.snippet}
                                    </p>
                                </div>
                            ))
                        }
                    </div>
                )
            }
        </div>
    ) ;
} ; 

export default SearchPage ; 