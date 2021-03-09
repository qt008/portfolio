import React from "react"
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import  '../styles/about.css'
import shocked from '../styles/images/shocked.png'
import codeTyping from '../styles/images/code-typing2.gif'
import { Container } from "@material-ui/core";
import Traits from "./Traits";




const AboutUs:React.FC = () => {
    return (
        <div className="about-below">
            <Container >
                
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <div className="about-details">
                            <h5>who am i? </h5>
                            <Avatar alt="Who are you?" style={{textAlign:'center',display:'inline-block'}} src={shocked} />
                            <p>A Full Stack and Object oriented web developer 
                                with experience developing LAMP stack powered web applications.
                                Convesant with BackEnd scripting languages like PHP and Python. 
                                FrontEnd Skills include Javascript and other JS frameworks like React and Jquery.
                                Ofcourse I know CSS and HTML. And YES i enjoy exploring new ideas and learning new languages.
                            </p>
                        </div>
                    </Grid>
                    
                    <Grid item xs={12} sm={6}>
                        <div className="image-begin">
                            <img src={codeTyping} alt="Developer" />
                        </div>
                    </Grid>
                </Grid>
               
            </Container>
            <div style={{position:'absolute'}}>
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#fafafa" fill-opacity="1" d="M0,32L48,74.7C96,117,192,203,288,218.7C384,235,480,181,576,138.7C672,96,768,64,864,58.7C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"></path></svg>
            </div>
            <Traits />
            
        </div>

    )
}

export default AboutUs