import React from "react";
import "../Assets/css/style.css"; 
import Fire from "../Assets/images/fire.svg";
import Nail from "../Assets/images/nail.svg";
import Death from "../Assets/images/death.svg";
import Mobile from "../Assets/images/mobile.svg";

class Card extends React.Component{
    render(){
        return(
            <div className="Solutions_card">
                <h2>Web 3.0<img className="star" src={Fire}></img></h2>
                <h3> High-end web, webapps,<br/>
                     web3, marketplaces<br/> 
                     developments. Including <br/>
                     industries like finance, <br/>
                     science, production, and more.
                </h3>
                <img className="mobile" src={Mobile}></img>
            </div>            
        )
    }
}
export default Card;