import React from "react";



let image = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6791_AL_.jpg"
function MovieCard(){
     return(
          <>
            <div className="movie-card-con">
            <div className="movie-card-poster"  >
                <img src={image} />
            </div>
            <div className="movie-card-information">
            <div className="movie-card-information-top">
                <p className="movie-card-information-top-title">GOD FATHER</p>
            </div>
            <div className="movie-card-information-bottom">
            <p className="movie-card-information-bottom-year">1996</p>
            <p className="movie-card-information-bottom-rate">9.5</p>
            </div>
            </div>
            </div>
          </>
     )
}



export default MovieCard
