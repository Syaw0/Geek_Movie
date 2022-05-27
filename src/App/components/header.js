import React from "react";
import SearchBox from "./SearchBox";
import { Button } from "./_button";
import useStore from "../Store";

function Header(){
     const getData = useStore(state => state.getData)
     let activeSession = useStore(state => state.activeSession)
     return(
          <div id="header">
            <div id={"header-top"} >
                <p id="header-logo">GEEK MOVIE</p>
                <SearchBox/>
            </div>
            <div id="header-bottom" >
            <Button inner="TOP MOVIES" type={"text header-btn "+activeSession.topM} event={()=>{getData("topM")}} /> 
            <Button inner="TOP SERIES" type={"text header-btn "+activeSession.topS}  event={()=>{getData("topS")}}/> 
            <Button inner="COMMING SOON" type={"text header-btn "+activeSession.com}  event={()=>{getData("com")}}/> 
            </div>
          </div>
     )
}



export default Header
