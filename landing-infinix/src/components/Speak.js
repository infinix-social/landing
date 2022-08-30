import React from "react";
import "../Assets/css/style.css"; 
import Vector from "../Assets/images/vectorLine.svg";

class Speak extends React.Component{
    render(){
        return(
            <div className="Speak">
                <div className="Speak_title">
                <h1>LETS SPEAK !</h1>
                <h3 className="textLight">We both want to know each other! 😃</h3>
                </div>
            </div>    
        )
    }
}
export default Speak;