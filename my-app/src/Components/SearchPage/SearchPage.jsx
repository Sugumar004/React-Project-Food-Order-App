import { Input } from "antd";
import React from "react";
import { useEffect } from "react";
import "./SearchPage.css"

function SearchPage({ combinedArray, setCombinedArray, search, setSearch,searchResult ,setSearchResult}){


    useEffect(()=>{
        const filteredResults = combinedArray.filter((post)=>((post.heading).toLowerCase()).includes(search.toLowerCase()) || 
        ((post.title).toLowerCase()).includes(search.toLowerCase()));
  
        setSearchResult(filteredResults);
  
      },[combinedArray, search])

    console.log(search)
    return(

        <>
        <div className="search_div">
        <input onChange={(e)=>{setSearch(e.target.value)}} className="srchinput"></input>
        <button className="search_btn" type="submit">Search</button>
        </div>

        </>
    )
}

export default SearchPage;

