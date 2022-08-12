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
                        <li ><a className="textMenu" href="#">HOME</a></li>
                        <li ><a className="textMenu" href="#">SOLUTION</a></li>
                        <li ><a className="textMenu" href="#">HOW WE CREATE</a></li>
                        <li ><a className="textMenu" href="#">CONTACT</a></li>
                    </ul>
                </div>
            </section>
        )
    }
}
export default NavBar;