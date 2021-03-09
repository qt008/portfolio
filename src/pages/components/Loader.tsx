import React, { useEffect, useState } from 'react';
import CircularProgress, { CircularProgressProps } from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

function CircularProgressWithLabel(props: CircularProgressProps & { value: number,colors: any }) {
  return (
    <Box position="relative" display="inline-flex">
      <CircularProgress style={{color:props.colors,padding:'1px'}} variant="determinate" {...props} />
      <Box
        top={0}
        left={0}
        bottom={0}
        right={0}
        position="absolute"
        display="flex"
        alignItems="center"
        justifyContent="center"
      >
        <Typography variant="caption" component="div" style={{color:'white'}} >{`${Math.round(
          props.value,
        )}%`}</Typography>
      </Box>
    </Box>
  );
}

const Loader:React.FC< { rating:number,colors:any; } > = props => {
  const [progress, setProgress] = useState(5);
  const limit = props.rating

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prevProgress) => (prevProgress >= limit ? limit : prevProgress + 10));
    }, 200);
    return () => {
      clearInterval(timer);
    };
  }, [limit]);

  return <CircularProgressWithLabel value={progress} colors={props.colors} />;
}

export default Loader