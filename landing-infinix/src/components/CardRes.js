import React from "react";
import "../Assets/css/style.css"; 
import Nail from "../Assets/images/nail.svg";

class CardRes extends React.Component{
    render(){
        return(
            <div className="CardRes" style={{top: `${this.props.top}px`}}>
                <h2 className="CardRes_title"> {this.props.title}</h2>
                <h3> {this.props.text}</h3>
            </div>       
        )
    }
}
export default CardRes;