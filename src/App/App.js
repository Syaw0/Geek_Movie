import React from "react";
import Header from "./components/header"
import Footer from "./components/footer"
import MovieCard from "./components/movieCard"
import MovieInformation from "./components/MovieInformation"

window.addEventListener("resize" , ()=>{
     document.getElementById("root").width = window.innerWidth
})


function App(){
     return(
          <>
          <Header/>
          {/* <div id="main">
          <MovieCard/>
          <MovieCard/>
          <MovieCard/>
          </div> */}
          {/* <div id="main-info">
          <MovieInformation/>
          </div> */}
          <Footer />
          </>
     )
}



export default App
