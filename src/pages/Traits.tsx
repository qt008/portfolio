import React from "react"
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Avatar from '@material-ui/core/Avatar';
import Grid from '@material-ui/core/Grid';
import  '../styles/traits.css'
import scale from '../styles/images/balance.png'
import programmer from '../styles/images/progr.png'
import { Container, Hidden } from "@material-ui/core";
import Loader from "./components/Loader";
import Skill from "./components/Skill";
import randomColor from "randomcolor";
import Advertise from "./Advertise";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
    },
    paper: {
      padding: theme.spacing(2),
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
  }),
);




const Traits:React.FC = () => {
    const classes = useStyles();
    return (
        <div className="traits-below">
            <Container >
                <div className="image-begin" style={{overflow:'hidden'}}>
                    <img src={programmer} style={{display:'inline-block',height:'350px',width:'350px'} } alt="Developer" />
                </div>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <div className="traits-details">
                            <h5>Front End</h5>
                            
                            <Skill language="HTML,CSS + { BOOSTRAP }" rating={100} image={require('../styles/images/bsg.png')} colors='#e03d00' />
                            {/* <Skill language="CSS" rating={80} image={require('../styles/images/css3.png')} colors={randomColor()} /> */}
                            {/* <Skill language="BOOTSTRAP" rating={100} image={require('../styles/images/bt4.png')} colors={randomColor()} /> */}
                            <Skill language="JAVASCRIPT" rating={70} image={require('../styles/images/js2.png')} colors='#e4f505' />
                            <Skill language="JQUERY" rating={70} image={require('../styles/images/jsc.png')} colors='#193556' />
                            <Skill language="React" rating={68} image={require('../styles/images/rjs.png')} colors='#00d7fe' />
                        </div>
                        
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="traits-details">
                            <h5>Back End & Database </h5>
                            
                            <Skill language="PHP" rating={90} image={require('../styles/images/php8.jpg')} colors='#7d90c8' />
                            <Skill language="MYSQL" rating={80} image={require('../styles/images/msq.png')} colors='#5236b4' />
                            <Skill language="PYTHON" rating={70} image={require('../styles/images/py.png')} colors='#3771a1' />
                            <Skill language="FIREBASE" rating={65} image={require('../styles/images/fb.png')} colors='#00bcd4' />
                        </div>
                    </Grid>
                </Grid>
                <Grid container spacing={4}>
                    <Grid item xs={12} sm={6}>
                        <div className="traits-details">
                            <h5>Tools & Others</h5>
                            
                            <Skill language="GITHUB" rating={80} image={require('../styles/images/gth.png')} colors='#3399db' />
                            <Skill language="AWS" rating={80} image={require('../styles/images/aws.png')} colors='#ffff' />
                            <Skill language="BITNAMI" rating={100} image={require('../styles/images/bitnami.png')} colors='#00437c' />
                            <Skill language="LINUX" rating={65} image={require('../styles/images/linux.png')} colors='#0a55ea' />
                        </div>
                    </Grid>
                    <Grid item xs={12} sm={6}>
                        <div className="traits-details">
                            <h5>Mobile Scale</h5>
                            
                            <Skill language="IONIC FRAMEWORK" rating={70} image={require('../styles/images/ion.png')} colors='#7136ff' />

                        </div>
                        
                    </Grid>
                </Grid>
            </Container>

        </div>

    )
}

export default Traits