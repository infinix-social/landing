import React from "react";
import "../Assets/css/style.css"; 
import bgMain from "../Assets/images/Background-header.png";
import bgSolution from "../Assets/images/solution.svg";
import bgCreate from "../Assets/images/create.svg";

class Background extends React.Component{
    render(){
        return(
            <div className="contain_Background">
                <div className="background-bgMain" style={{
                    backgroundImage: `url("${bgMain}")`
                    }}>
                    </div>
                {/* <div className="bgSolution"><img className="background" src={bgSolution}></img></div>
                <div className="bgCreate "><img className="background" src={bgCreate}></img></div>
                <div className="bgCreate dis"><img className="background" src={bgCreate}></img></div>
                <div className="Speak_background">
                   <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1400 220">
                        <path fill="#0099ff" fill-opacity="1" d="M0,64L48,101.3C96,139,192,213,288,213.3C384,213,480,139,576,117.3C672,96,768,128,864,122.7C960,117,1056,75,1152,74.7C1248,75,1344,117,1392,138.7L1440,160L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path>
                   </svg>
                </div> */}
            </div>
        )
    }
}
export default Background;


