import { Container } from "@material-ui/core";
import React, { useEffect, useState } from "react"
import { Fade, Slide } from "react-awesome-reveal";
import './nerdy.css'
import Progress from "./Progress";



const Nerdy:React.FC = () => {

    const [Developer, setDeveloper] = useState('...')

    useEffect(() => {
        
        const values = [' Hello World','I am K.O.K',' A Web Developer','I speak PHP,','Javascript','And Python']
        var i = 0
        const id = setInterval(() => {
            setDeveloper('<  '+values[i] + '  />') 
            i++
            i = i > 5 ? 0 : i
        },5000)
        return () => {
            clearInterval(id);
          };
    }, [])

    return (
        <>
            <Container>
                <div className="head-text-over">
                    <Fade triggerOnce={false}>
                        <span>  { Developer}</span>
                    </Fade>
                    <div className="header-progress">
                    <Slide delay={2000} direction="up" >

                        <Progress />
                    </Slide>

                    </div>

                </div>
            </Container>
        </>

    )
}
export default Nerdy 