import React from "react";
import "../Assets/css/style.css"; 

class Background extends React.Component{
    render(){
        return(
            <section className="Background">
                <div className='Elipse'></div>
                <div className='Elipse1'></div>
                <div className='Elipse2'></div>
            </section>
        )
    }
}
export default Background;