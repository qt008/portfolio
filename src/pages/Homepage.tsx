import React from "react"
import '../styles/homepage.css'
import developer2 from '../styles/images/developer2.png'
import programmer from '../styles/images/programmer.png'
import Nerdy from "./components/Nerdy";
import { Slide } from "react-awesome-reveal";


const Hompage:React.FC = () => {
    return (
  
        <div className="home-header">
        <div className="home-header-content">
          <div className="home-header-content-begin">
            <Slide direction="down" delay={500} triggerOnce>
              <img height="100" width="100" alt='developer' src={programmer} />
            </Slide>
            <Nerdy />
            <Slide direction="up" delay={500} triggerOnce>
              <div className="image-begin">
                <img src={developer2} alt="Developer" />
              </div>
            </Slide>
           
          </div>
          
        </div>
        
      </div>
      
    
    ) 

}

export default Hompage