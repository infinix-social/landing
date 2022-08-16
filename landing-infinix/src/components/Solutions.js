import React from "react";
import "../Assets/css/style.css"; 
import Card from '../components/Card';

class Solutions extends React.Component{
    render(){
        return(
            
            <div className="Solutions">
                <div className="Solutions_title">
                    <h1>SOLUTIONS</h1>
                    <h3 className="textLight"> We are a team of professionals dedicated<br/>to create<span className="textBold"> your notable presence.</span></h3>
                </div>
                <div className="Solutions_cards">
                    <Card/>
                    <Card/>
                    <Card/>
                </div>     
            </div>    
   
        )
    }
}
export default Solutions;