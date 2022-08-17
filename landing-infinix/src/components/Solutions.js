import React from "react";
import "../Assets/css/style.css"; 
import Card from '../components/Card';
import Fire from "../Assets/images/fire.svg";
import Nail from "../Assets/images/nail.svg";
import Death from "../Assets/images/death.svg";
import Mobile from "../Assets/images/mobile.svg";
class Solutions extends React.Component{
    render(){
        return(
            
            <div className="Solutions">
                <div className="Solutions_title">
                    <h1>SOLUTIONS</h1>
                    <h3 className="textLight"> We are a team of professionals dedicated<br/>to create<span className="textBold"> your notable presence.</span></h3>
                </div>
                <div className="Solutions_cards">
                    <Card   title="Social" 
                            emoji={Nail} 
                            imagen={Mobile} 
                            text="High-end web, webapps,
                                  web3, marketplaces 
                                  developments. Including 
                                  industries like finance, 
                                  science, production, and more."
                    />
                    <Card   title="ADS" 
                            emoji={Death} 
                            imagen={Mobile} 
                            text="High-end web, webapps,
                                  web3, marketplaces 
                                  developments. Including 
                                  industries like finance, 
                                  science, production, and more."
                    />
                    <Card   title="Web 3.0"
                            emoji={Fire}
                            imagen={Mobile}
                            text="High-end web, webapps,
                                  web3, marketplaces 
                                  developments. Including 
                                  industries like finance, 
                                  science, production, and more."
                    />
                </div>     
            </div>    
   
        )
    }
}
export default Solutions;