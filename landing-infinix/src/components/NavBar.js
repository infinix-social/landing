import React from "react";
import "../Assets/css/style.css"; 

class NavBar extends React.Component{
    render(){
        return(
            <section className="NavBar-header">
                <div className="NavBar-logo">
                </div>
                <div className="NavBar-nav">
                    <ul>
                        <li className="textMenu">HOME</li>
                        <li className="textMenu">SOLUTION</li>
                        <li className="textMenu">HOW WE CREATE</li>
                        <li className="textMenu">CONTACT</li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default NavBar;