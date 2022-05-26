import React from "react";
import { Button } from "./_button";
import Ico_arrowright from "../assest/icons/Icon_arrowright";

let image = "https://m.media-amazon.com/images/M/MV5BM2MyNjYxNmUtYTAwNi00MTYxLWJmNWYtYzZlODY3ZTk3OTFlXkEyXkFqcGdeQXVyNzkwMjQ5NzM@._V1_Ratio0.6791_AL_.jpg"
function MovieInformation(){
     return(
          <>
            <div className="movie-information-con">
            <div className="movie-information-poster"  >
                <img src={image} />
            </div>
            <div className="movie-information-infos"  >
                <p  className="movie-information-infos-title" >GOD FATHER</p>
                <p  className="movie-information-infos-year" >1996</p>
                <div className="movie-information-infos-content-con">
                <p  className="movie-information-infos-content" >
                     The Godfather is a 1972 American crime film directed by Francis Ford Coppola, who co-wrote the screenplay with Mario Puzo, based on Puzo's best-selling 1969 novel of the same name. The film stars Marlon Brando, Al Pacino, James Caan, Richard Castellano, Robert Duvall, Sterling Hayden, John Marley, Richard Conte, and Diane Keaton. It is the first installment in The Godfather trilogy. The story, spanning from 1945 to 1955, chronicles the Corleone family under patriarch Vito Corleone (Brando), focusing on the transformation of his youngest son, Michael Corleone (Pacino), from reluctant family outsider to ruthless mafia boss.\r\nParamount Pictures obtained the rights to the novel for the price of $80,000, before it gained popularity. Studio executives had trouble finding a director; the first few candidates turned down the position before Coppola signed on to direct the film but disagreement followed over casting several characters, in particular, Vito and Michael. Filming took place primarily on location around New York City and in Sicily, and was completed ahead of schedule. The musical score was composed principally by Nino Rota, with additional pieces by Carmine Coppola.\r\nThe Godfather premiered at the Loew's State Theatre on March 14, 1972, and was widely released in the United States on March 24, 1972. It was the highest-grossing film of 1972, and was for a time the highest-grossing film ever made, earning between $250 and $291 million at the box office. The film received universal acclaim from critics and audiences, with praise for the performances, particularly those of Brando and Pacino, the directing, screenplay, cinematography, editing, score, and portrayal of the mafia. The Godfather acted as a catalyst for the successful careers of Coppola, Pacino, and other relative newcomers in the cast and crew. The film also revitalized Brando's career, which had declined in the 1960s, and he went on to star in films such as Last Tango in Paris, Superman, and Apocalypse Now. At the 45th Academy Awards, the film won Best Picture, Best Actor (Brando), and Best Adapted Screenplay (for Puzo and Coppola). In addition, the seven other Oscar nominations included Pacino, Caan, and Duvall for Best Supporting Actor, and Coppola for Best Director.\r\nThe Godfather is regarded as one of the greatest and most influential films ever made, as well as a landmark of the gangster genre. It was selected for preservation in the U.S. National Film Registry of the Library of Congress in 1990, being deemed \"culturally, historically, or aesthetically significant\" and is ranked the second-greatest film in American cinema (behind Citizen Kane) by the American Film Institute. It was followed by sequels The Godfather Part II (1974) and The Godfather Part III (1990)."
                </p>
                </div>
                <div className="movie-information-infos-btn">
                <Button inner ="Go Back"  type="text movie-info-btn-text" />
                <Button inner ="SEE MORE" icon={<Ico_arrowright/>} type="primary movie-info-btn" />
                </div>
            </div>
            </div>
          </>
     )
}



export default MovieInformation
