import React from "react";
import "../Assets/css/style.css"; 
import Line from "../Assets/images/line.svg";

class Create extends React.Component{
    render(){
        return(
            <div className="Create">
                <div className="CreateBackground">
                    <div className='Elipse5'></div>
                    <div className='Elipse6'></div>
                    <div className='Elipse7'></div>
                </div>
                <div className="Create_title">
                    <h1>HOW WE CREATE<br/> MASTERPIECES</h1>
                    <h3 className="textLight"> <span className="textBold"> Step by step</span>, from nowhere to create<span className="textBold"> Inifinix</span></h3>
                    <img className="line" src={Line}></img>

                </div>
            </div>    
        )
    }
}
export default Create;