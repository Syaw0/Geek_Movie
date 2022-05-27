import React,{useState} from "react";
import Ico_search from "../assest/icons/Icon_search";
import useStore from "../Store";
function SearchBox(){ 
    const [input , setInput] = useState("")
    let getdata = useStore(state => state.getData)


    const keyHandle = (e)=>{
        if(e.key=="Enter"){getdata("search" ,input) ; setInput("")}
        
    }

    const clickHandle = (e) =>{
        if(e.target.id == "search-icon"){getdata("search" , input) ; setInput("")}
        
    }


     return(
        // (e)=>{}
        // (e)=>{if(e.target.id=="search-icon"){getdata(input)}}
        <div id="search-input-con"
            onKeyDown={keyHandle}
            onClick={clickHandle}
            >

            <input id="search-input" onChange={(e)=>{setInput(e.target.value)}}  value={input}/>
            <Ico_search />
        </div>
     )
}



export default SearchBox


