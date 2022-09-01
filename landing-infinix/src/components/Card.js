import React from "react";
import "../Assets/css/style.css"; 

class Card extends React.Component{
    render(){
        return(
            <div className="Solutions_card">
                <h2>{this.props.title}</h2>
                <h3> {this.props.text}</h3>
                <img className="mobile" src={this.props.imagen}></img>
            </div>       
        )
    }
}
export default Card;