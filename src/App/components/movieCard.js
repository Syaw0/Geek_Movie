import React from "react";
import useStore from "../Store";

function MovieCard(props){
  let getdata = useStore(state => state.getData)
  let image = props.data.image.split("._V1_")[0]+"._V1_Ratio0.6791_AL_.jpg"
     return(
          <>
            <div className="movie-card-con" onClick={()=>{getdata("wiki" , props.data.id , image)}}>
            <div className="movie-card-poster"  >
                <img src={image} />
            </div>
            <div className="movie-card-information">
            <div className="movie-card-information-top">
                <p className="movie-card-information-top-title">{props.data.title}</p>
            </div>
            <div className="movie-card-information-bottom">
            <p className="movie-card-information-bottom-year">{props.data.year}</p>
            <p className="movie-card-information-bottom-rate">{props.data.imDbRating}</p>
            </div>
            </div>
            </div>
          </>
     )
}



export default MovieCard
