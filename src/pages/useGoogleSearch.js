import {useState , useEffect} from "react" ; 
import { API_KEY } from "../keys";

const CONTEXT_KEY = "339c9d0e4459a4e0c" ; 

const useGoogleSearch = (term) => {
    const [data , setData] = useState() ; 
    useEffect( () => {
        const fetchData = async () => {
            const data =await  fetch(`https://www.googleapis.com/customsearch/v1?key=${API_KEY}&cx=${CONTEXT_KEY}&q=${term}`) ; 
            const json = await data.json() ; 
            setData(json) ; 

        }
        fetchData() ; 
    } , [term]) ; 
    return {data} 
} ; 


export default useGoogleSearch ; 