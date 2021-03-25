import React, { useState } from 'react';
import { makeStyles, Theme, createStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import Code from '@material-ui/icons/Code';
import DeveloperModeIcon from '@material-ui/icons/DeveloperMode';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './cardportfolio.css'
import DrawerImage from '../DrawerImage';
import { Chip } from '@material-ui/core';

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      Width: 345,
     
    },
    media: {
      height: 0,
      paddingTop: '56.25%',
    },
    expand: {
      transform: 'rotate(0deg)',
      marginLeft: 'auto',
      transition: theme.transitions.create('transform', {
        duration: theme.transitions.duration.shortest,
      }),
    },
    expandOpen: {
      transform: 'rotate(180deg)',
    },
    avatar: {
      backgroundColor: red[500],
    },
  }),
);

const CardPortfolio:React.FC<{
                              images:any,
                              title:string,
                              description:string,
                              details:string,
                              stack:any,
                              date:any,
                              image_list:any,
                              links:any
                              }> = props =>  {
  const classes = useStyles();
  const [expanded, setExpanded] = useState(false);
  const [images, setImages] = useState<any>([])
  const handleExpandClick = () => {
    setExpanded(!expanded);
    setImages(props.image_list)
  };
  const image_url = props.images.default.toString()
  return (
    <Card className={classes.root}  style={{backgroundColor:"transparent", textAlign:'center'}} >
      <CardHeader 
       style={{padding:'5px', color:"white",fontWeight:'bolder',marginBottom:'50px'}}
        avatar={
          <Avatar aria-label="recipe" className={classes.avatar}>
            {props.title.substring(1,0)}
          </Avatar>
        }
        
        title={props.title}
        subheader={props.date}
      />
      <CardMedia
        
        className={classes.media}
        image={image_url}
        title={props.title}
      />
      <CardContent  style={{}}>
        <Typography variant="body2" style={{color:'white'}}  component="p">
          {props.description}
        </Typography>
      </CardContent>
      <CardActions disableSpacing >
        <IconButton aria-label="website" style={{backgroundColor:'white', borderRadius:'50%',padding:'5px', color:"black"}}>
          <ShareIcon  />
        </IconButton>
        <IconButton
          className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more"
        >
          <DrawerImage draw={images} title={props.title} />
        </IconButton>
        <IconButton className={clsx(classes.expand, {
            [classes.expandOpen]: expanded,
          })}
          style={{backgroundColor:'white', borderRadius:'50%',padding:'5px', color:"black"}}
          onClick={handleExpandClick}
          aria-expanded={expanded}
          aria-label="show more">
                    <ExpandMoreIcon />

        </IconButton>
      </CardActions>
      <Collapse in={expanded} timeout="auto" unmountOnExit style={{backgroundColor:"white",}}>
        <CardContent>
          <Chip
          style={{fontStyle:'italic',fontWeight:'lighter',marginTop:'10px',marginBottom:'10px'}}
          icon={<Code />}
          label="Tech Stack"
          color="secondary"
        />
        <br />
          { props.stack.map( (item:any) => (
                  <Chip

                  style={{margin:'5px',}}
                  label={item}
                  icon={<DeveloperModeIcon />}
              
                />

          )) }
          <hr style={{color:'black'}}></hr>
          <Typography style={{fontStyle:'italic'}} paragraph>{props.details}</Typography>
          <hr style={{color:'black'}}></hr>
          {
            props.links.admin &&
            <a target="__blank" href={props.links.admin}> 
              <Chip
                style={{fontStyle:'italic',fontWeight:'lighter',margin:'10px'}}
                icon={<Code />}
                label="Admin Panel"
                color="primary"
                clickable
              /> 
            </a>
          }
          {
            props.links.client &&
            <a target="__blank" href={props.links.client}> 
              <Chip
                style={{fontStyle:'italic',fontWeight:'lighter',margin:'10px'}}
                icon={<Code />}
                label="App Demo"
                color="primary"
                clickable
              /> 
            </a>   

          }


        </CardContent>
      </Collapse>
      
    </Card>

  );
}
export default CardPortfolio