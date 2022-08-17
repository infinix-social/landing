import React from "react";
import "../Assets/css/style.css"; 
import Line from "../Assets/images/line.svg";
import CardRes from '../components/CardRes';

class Create extends React.Component{
    render(){
        return(
            <div className="Create">
                <div className="CreateBackground">
                    <div className='Elipse5'></div>
                    <div className='Elipse6'></div>
                    <div className='Elipse7'></div>
                    <div className='Elipse9'></div>
                </div>
                <div className="Create_title">
                    <h1>HOW WE CREATE<br/> MASTERPIECES</h1>
                    <h3 className="textLight"> <span className="textBold"> Step by step</span>, from nowhere to create<span className="textBold"> Inifinix</span></h3>
                    <img className="line" src={Line}></img>
                </div>
                <div className="Roadmap">
                    <CardRes 
                        top="26"
                        title=" 🤝 We know each other"
                        text=" Just like every great relationship, we start with empathy and a huge smile :)"
                    />
                    <CardRes 
                        top="121"
                        title=" 🎯 Find out your necessities"
                        text=" High-end web, webapps, web3, marketplaces developments. Including industries like finance, science, production, and more."
                    />
                    <CardRes 
                        top="18"
                        title=" 🏃‍♂️ We develop fit sized solutions"
                        text=" It has to be for you and it has to be usefull. Otherwise, it requires a step back."
                    />
                    <CardRes 
                        top="120"
                        title=" 😎 We make it look cool"
                        text=" Our team may not be the hughest, but it’s the coolest in town. That’s how we ensure to generate a glance back."
                    />
                    <CardRes 
                        top="38"
                        title=" ☕️ Data science starts drinking coffee"
                        text=" Let that part to them, they are experts, and nerds..."
                    />
                    <CardRes 
                        top="186"
                        title=" ☕️ Data science starts drinking coffee"
                        text=" Let that part to them, they are experts, and nerds..."
                    />
                </div>

            </div>    
        )
    }
}
export default Create;