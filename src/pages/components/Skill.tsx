import React from 'react';
import Paper from '@material-ui/core/Paper';
import { makeStyles, createStyles, Theme } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Chip from '@material-ui/core/Chip';
import Avatar from '@material-ui/core/Avatar';
import Loader from './Loader';
import './skill.css'


const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      flexGrow: 1,
      overflow: 'hidden',
      padding: theme.spacing(0, 3),
    },
    paper: {
      maxWidth: 400,
      margin: `${theme.spacing(1)}px auto`,
      padding: theme.spacing(2),
    },
  }),
);

const message = `Truncation should be conditionally applicable on this long line of text
 as this is a much longer line than what the container can support. `;

const Skill:React.FC<{language:string,rating:number,image:any,colors:any}> = props => {
  const classes = useStyles();
  const image_url = props.image.default.toString()
  return (
    <div className={classes.root}>
      <Paper className={classes.paper} style={{backgroundColor:'black'}}>
        <Grid container wrap="nowrap" spacing={2}>
          <Grid item>
            <Avatar src={image_url} variant="rounded" alt="react" >
            </Avatar>
          </Grid>
          <Grid item xs zeroMinWidth>
              <Chip
                className="chip_am"
                avatar={<Avatar> {props.language.substring(1,0)} </Avatar>}
                label={props.language}
                clickable
                style={{border:'3px solid' + props.colors,color:'#fff',fontWeight:'bolder',fontStyle:'italic',padding:'5px'}}
                variant="outlined"
              />
              
          </Grid>
          <Grid>
            <Loader rating={props.rating} colors={props.colors} />
          </Grid>
        </Grid>
      </Paper>
      <hr />
    </div>
  );
}
export default Skill