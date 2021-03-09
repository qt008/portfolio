import { Height } from '@material-ui/icons'
import React from 'react'
import Email from "../styles/images/email.gif"



const Footer:React.FC = ( ) => {

    return (
        <div style={{backgroundColor:'#000',height:'50vh'}}>
                        <div style={{position:'absolute'}}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#e9e8e8" fill-opacity="1" d="M0,0L40,26.7C80,53,160,107,240,149.3C320,192,400,224,480,218.7C560,213,640,171,720,149.3C800,128,880,128,960,149.3C1040,171,1120,213,1200,240C1280,267,1360,277,1400,282.7L1440,288L1440,0L1400,0C1360,0,1280,0,1200,0C1120,0,1040,0,960,0C880,0,800,0,720,0C640,0,560,0,480,0C400,0,320,0,240,0C160,0,80,0,40,0L0,0Z"></path></svg>
            </div>

        </div>
    )

} 

export default Footer