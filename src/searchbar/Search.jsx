import React from "react";
import SearchBar from "./Searchbar";
import backgroundImage from "../images/back2.jpg"; //  Import Image


function Search() {
  return (
    
      <div
        style={{
          backgroundImage: `url(${backgroundImage})`, 
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed", // ✅ Fix Here
          height: "100vh",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          justifyContent: "center",
          textAlign: "center",

        }}
      >
        <h1 style={{ color:"#FFFFFF", fontWeight: "bold" , fontSize:"2.2rem"}}>Search hotels in Hyderabad</h1>
        <p style={{ color: "#FFFFFF",fontSize:"2rem" }}>
          Enter your dates to see the latest prices and deals for Hyderabad hotels
        </p>
        <SearchBar />
      </div>
    
  );
}

export default Search;
