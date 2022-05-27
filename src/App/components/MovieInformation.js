import React from "react";
import { Button } from "./_button";
import Ico_arrowright from "../assest/icons/Icon_arrowright";
import useStore from "../Store";

function MovieInformation(props){
     let img = useStore(state => state.informationImg)
     let getdata = useStore(state => state.getData)
     return(
          <>
            <div className="movie-information-con">
            <div className="movie-information-poster"  >
                <img src={img} />
            </div>
            <div className="movie-information-infos"  >
                <p  className="movie-information-infos-title" >{props.data.title}</p>
                <p  className="movie-information-infos-year" >{props.data.year}</p>
                <div className="movie-information-infos-content-con">
                <p  className="movie-information-infos-content" >
                     {props.data.plotShort.plainText}
                </p>
                </div>
                <div className="movie-information-infos-btn">
                <Button inner ="Go Back"  type="text movie-info-btn-text" event={()=>{getdata("topM")}}/>
                <Button inner ="SEE MORE" icon={<Ico_arrowright/>} type="primary movie-info-btn"  event={()=>{window.location.href=props.data.url}}/>
                </div>
            </div>
            </div>
          </>
     )
}



export default MovieInformation
