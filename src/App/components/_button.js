import React from "react";

function Button(props){
     return(
            <button className={props.type} event={props.event} >{props.inner} {props.icon}</button>
     )
}



export  {Button}
