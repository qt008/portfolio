import React from 'react'
import Email from "../styles/images/email.gif"



const Connect:React.FC = ( ) => {

    return (
        <div style={{backgroundColor:'#e9e8e8',height:'100vh'}}>
            <div style={{paddingTop:'100px',overflow:'hidden'}}>
                <img height="350" width="350" src={Email}  alt="email"  />

            </div>
            <div>
                <h3 style={{fontSize:'3em',fontFamily: 'Stick, sans-serif',fontWeight:'bolder'}}>Got any Questions ?</h3>

            </div>
            <div>
                <span style={{fontSize:'1.2em',fontFamily:'Ubuntu Condensed, sans-serif;',fontWeight:'bolder'}}>Send emails to:</span><br></br>
                 <a href="mailto:qt008@tutanota.com?subject = Portfolio&body = Message">

                    <span style={{
                        fontSize:'1.3em',fontFamily:'Ubuntu Condensed, sans-serif;'
                        ,fontWeight:'bolder',color:'#165d56',
                        borderBottom:'solid 3px solid'}}>
                            ' qt008@tutanota.com '
                    </span>
                </a>
            </div>

        </div>
    )

} 

export default Connect