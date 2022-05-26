import React from "react";
import Icon_behanse from "../assest/icons/Icon_behanse";
import Icon_dribbble from "../assest/icons/Icon_dribbble";
import Icon_facebook from "../assest/icons/Icon_facebook"
import Icon_github from "../assest/icons/Icon_github";
import Icon_instagram from "../assest/icons/Icon_instagram";
import Icon_linkedin from "../assest/icons/Icon_linkedin";
import Icon_youtube from "../assest/icons/Icon_youtube";
import { Button } from "./_button";

function Footer(){
     return(
          <div id="footer">

            <div id="footer-top">
            <Button inner="About" type="text footer-btn" event={{}}/>
            <Button inner="Blog" type="text footer-btn" event={{}}/>
            <Button inner="API" type="text footer-btn" event={{}}/>
            <Button inner="Press" type="text footer-btn" event={{}}/>
            <Button inner="IMBD" type="text footer-btn" event={{}}/>
            <Button inner="Faq" type="text footer-btn" event={{}}/>
            </div>

            <div id="footer-bottom">
                <Icon_behanse/>
                <Icon_dribbble/>
                <Icon_facebook/>
                <Icon_github/>
                <Icon_instagram/>
                <Icon_linkedin/>
                <Icon_youtube/>
            </div>  
          </div>
     )
}



export default Footer
