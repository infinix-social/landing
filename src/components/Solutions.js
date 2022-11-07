import React from "react";
import "../Assets/css/style.css"; 
import Card from '../components/Card';
import Ads from "../Assets/images/ads.png";
import Apps from "../Assets/images/apps.png";
import Web from "../Assets/images/web.png";
import Fade from 'react-reveal/Fade';
import bgSolution from "../Assets/images/bgSolution.png";

class Solutions extends React.Component{
    render(){
        return(

            <div id="Solutions" className="Solutions">
                    <div className="bgSolution" style={{
                        backgroundImage: `url("${bgSolution}")`
                        }}>
                    </div>
                <Fade up>
                    <div className="Solutions_title">
                        <h2>SOLUTIONS</h2>
                        <p className="subtitle"> We're a network of creative minds.<br/> We're all dedicated to take<br/><span className="bold"> your brand to the next level.</span></p>
                    </div>
                </Fade>
                <div  className="Solutions_cards">
                <Fade right >
                    <Card   title="Social & Ads 👨‍💻" 
                            imagen={Ads} 
                            text={<p>It's not about creating content, but creating a tribe and reaching new ways to engage.<br/>
                            We love research & data analitycs, let's prove how good we are. ⚡</p>}
                    />
                </Fade>   
                <Fade bottom >
                    <Card   title="Apps 🤳" 
                            imagen={Apps} 
                            text={<p>Being in touch, at this era, is a must. <br/>
                            What if your audience were always with you and
                            aware of the benefits you can offer? <br/> Thats the power of a app.🚀</p>}
                    />
                </Fade>   
                <Fade left >
                    <Card   title="Web 2 & 3 🦄 "
                            imagen={Web}
                            text={<p><br/>Imagine not just a new look, but also a new way to feel & experience your brand. <br/>
                            Bring us the challenge, we have some ninjas to make it happen.🥷</p>}
                    />
                </Fade>   

                </div>  
            </div>    
   
        )
    }
}
export default Solutions;