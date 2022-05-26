import React from "react";
import Ico_search from "../assest/icons/Icon_search";
import SearchBox from "./SearchBox";
import { Button } from "./_button";

function Header(){
     return(
          <div id="header">
            <div id="header-top" >
                <p id="header-logo">GEEK MOVIE</p>
                <SearchBox/>
            </div>
            <div id="header-bottom" >
            <Button inner="TOP MOVIES" type="text header-btn"  /> 
            <Button inner="TOP SERIES" type="text header-btn"  /> 
            <Button inner="COMMING SOON" type="text header-btn"  /> 
            </div>
          </div>
     )
}



export default Header
