import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import VisibilityIcon from '@material-ui/icons/Visibility';
import { SRLWrapper } from "simple-react-lightbox";
import { IconButton } from '@material-ui/core';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

const  DrawerImage:React.FC< {draw:any,title:string} > = props => {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const drawer_list = props.draw


  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
      // onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
    <div>
    <SRLWrapper>
    { drawer_list.map( (items:any) => (
        <a href={items.default.toString() }>
          <img height="150" width='250'  src={items.default.toString()} alt={props.title} />
        </a>

      )) 
    }
    </SRLWrapper>
    </div>
    </div>
  );

  return (
    // <div>
    //   {(['left', 'right', 'top', 'bottom'] as Anchor[]).map((anchor) => (
    //     <React.Fragment key={anchor}>
    <div>          <Button style={{color:'white'}} onClick={toggleDrawer('right', true)}>
                    {/* <span>right</span> */}
                    <IconButton aria-label="view" style={{backgroundColor:'white', borderRadius:'50%',padding:'5px', color:"black"}}>
                    <VisibilityIcon />

                    </IconButton>
                    </Button>
          <Drawer anchor='right' open={state['right']} onClose={toggleDrawer('right', false)}>
            {list('right')}
          </Drawer>
          </div>

    //     </React.Fragment>
    //   ))}
    // </div>
  );
}
export default DrawerImage
