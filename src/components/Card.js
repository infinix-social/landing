import React from "react";
import "../Assets/css/style.css"; 
import BackdropFilter from "react-backdrop-filter";
class Card extends React.Component{
    render(){
        const {text}  =this.props;
        console.log(text);
        return(

            <div className="Solutions_card">
                <div className="Solutions_Contain" style={{ backgroundImage:`url(${this.props.imagen})` }}>
                    <h3>{this.props.title}</h3>
                    {text}
                </div>
            </div>      
        )
    }
}
export default Card;