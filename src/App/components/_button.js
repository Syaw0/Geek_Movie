import React from "react";

function Button(props){
     return(
            <button className={props.type} onClick={()=>props.event()} >{props.inner} {props.icon}</button>
     )
}



export  {Button}
