import React from "react";
import "../Assets/css/style.css"; 

class NavBar extends React.Component{
    render(){
        return(
                <div className="NavBar-header">
                    <div className="NavBar-logo"></div>
                    <nav className="menu">
                        <button aria-expanded="false" aria-controls="menu-list">
                            <a href="#"><span className="open">&#9776;</span></a>
                            <a href="#"><span className="close">&#9747;</span></a>
                        </button>
                        <div className="NavBar-list">
                            <ul className="menu-list">
                                <li ><a className="textMenu" href="google.com">HOME</a></li>
                                <li ><a className="textMenu" href="google.com">SOLUTION</a></li>
                                <li ><a className="textMenu" href="#">HOW WE CREATE</a></li>
                                <li ><a className="textMenu" href="#">CONTACT</a></li>
                            </ul>
                        </div>

                    </nav>
                </div>
        )

    }
}
export default NavBar;