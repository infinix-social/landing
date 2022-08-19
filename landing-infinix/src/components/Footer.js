import React from "react";
import "../Assets/css/style.css"; 
import vecTwitter from "../Assets/images/vecTwitter.svg";
import vecInstagram from "../Assets/images/vecInstagram.svg";
import vecLinkedin from "../Assets/images/vecLinkedin.svg";

class Footer extends React.Component{
    render(){
        return(
            <div className="Footer">
                <div className="links">
                    <div className="Footer_links">
                        <div className="Footer_link1">
                            <h3 className="textLight"><a href="#"> Infinix<span className="textBold"> Holding Group</span></a></h3>
                            <h3 className="textLight"><a href="#"> Infinix<span className="textBold"> NFT Factory</span></a></h3>
                            <h3 className="textLight"><a href="#"> Infinix<span className="textBold"> Gaming</span></a></h3>
                        </div>
                        <div className="Footer_link2">
                            <h3 className="textLight"><a href="#"> Infinix<span className="textBold"> Investments</span></a></h3>
                            <h3 className="textLight"><a href="#"> Infinix<span className="textBold"> VR / AR Development</span></a></h3>
                            <h3 className="textLight"><a href="#"> Infinix<span className="textBold"> Soft</span></a></h3>
                        </div>
                    </div>
                    <div className="Footer_social">
                        <img src={vecTwitter}></img>
                        <img src={vecInstagram}></img>
                        <img src={vecLinkedin}></img>
                    </div>
                </div>
                <div className="copy">
                    <h3 className="textLight"> Copyright 2022 <span className="textBold">InfinixSocial</span> | All Rights Reserved</h3>
                </div>
            </div>   
        )
    }
}
export default Footer;