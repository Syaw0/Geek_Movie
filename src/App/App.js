import React, { useEffect, useState } from "react";
import Header from "./components/header";
import Footer from "./components/footer";
import MovieCard from "./components/movieCard";
import MovieInformation from "./components/MovieInformation";
import Loading from "./components/Loading";
import Error from "./components/Error";
import useStore from "./Store";

window.addEventListener("resize", () => {
  document.getElementById("root").width = window.innerWidth;
});

window.addEventListener("wheel" , (e)=>{
     if(e.pageY > 200){
          document.getElementById("header-top").className ="header-top"
     }else{
          document.getElementById("header-top").className =""
     }
})


function App() {
  const getdata = useStore((state) => state.getData);
  const data2 = useStore((state) => state.currentData);
  const isSuccess = useStore((state) => state.isSuccess);
  const hasError = useStore((state) => state.hasError);




  useEffect(() => {
    getdata("topM");
  }, []);

  useEffect(() => {
    console.log(isSuccess)
  }, );


  return (
    <>
      <Header />
      {!isSuccess && <Loading />}

      {hasError && <Error/>}

      {!hasError&& isSuccess && data2["results"]!= undefined && (
        <div id="main">
          {data2["results"].map((v, i) => {
              return <MovieCard key={i} data={v} />;
            })}
        </div>
      )}

      {!hasError&& isSuccess && data2.length >2 && (
        <div id="main">
          {data2.map((v, i) => {
              return <MovieCard key={i} data={v} />;
            })}
        </div>
      )}

     {!hasError&& isSuccess && data2["plotFull"] != undefined == 1&&
     <div id="main-info">
     <MovieInformation data= {data2}/>
     </div>
          }

      <Footer />
    </>
  );
}

export default App;
