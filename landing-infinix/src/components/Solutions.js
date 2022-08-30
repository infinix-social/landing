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
                    <h3> We are a team of professionals dedicated<br/>to create<span className="textBold"> your notable presence.</span></h3>
                </div>
                <div className="Solutions_cards">
                    <Card   title="Social<br/>" 
                            emoji={Nail} 
                            imagen={Mobile} 
                            text="It’s not about creating content, but creating a tribe.
                            We’re fans of human relationships and how the mind works. Let’s prove it  ⚡"
                    />
                    <Card   title="ADS" 
                            emoji={Death} 
                            imagen={Mobile} 
                            text="Growing, selling, getting in touch, branding, or whatever your current objective is, 
                            we have some ninjas to make it happen  🥷"
                    />
                    <Card   title="Web 2 and 3.0 🦄 "
                            emoji={Fire}
                            imagen={Mobile}
                            text="Do you need an approach to your clients but with a new look?
                            Our developers love challenges, what’s on your mind?  🚀"
                    />
                </div>     
            </div>    
   
        )
    }
}
export default Solutions;