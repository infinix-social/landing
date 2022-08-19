import React from "react";
import "../Assets/css/style.css"; 
import Vector from "../Assets/images/vectorLine.svg";

class Speak extends React.Component{
    render(){
        return(
            <div className="Speak">
                <div className="Speak_background">
                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
                        <path fill="#0099ff" fill-opacity="1" d="M0,160L60,160C120,160,240,160,360,176C480,192,600,224,720,229.3C840,235,960,213,1080,213.3C1200,213,1320,235,1380,245.3L1440,256L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"></path>
                    </svg>
                </div>
                <div className="Speak_title">
                <h1>LETS SPEAK !</h1>
                <h3 className="textLight">We are waiting to know more about you! 😃</h3>
                </div>

            </div>    
   
        )
    }
}
export default Speak;