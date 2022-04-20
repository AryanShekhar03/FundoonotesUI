import * as React from 'react';
import Box from '@mui/material/Box';
import Popper from '@mui/material/Popper';
import ColorLensIcon from '@mui/icons-material/ColorLens';
import { color } from '@mui/material/node_modules/@mui/system';


function SimplePopper(props) {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const colorArray = ['#D2691E', '#ffae42', '#DEB887', '#77dd77', '#FF1493', '#B8860B', '#77b5fe', '#ba55d3', '#ffb3de', '#c19a6b', '#6495ED','#7FFF00']
  
  const takeColor=(color)=>{
      console.log(color)
      if(props.action==='create'){
          console.log('create',color)
          props.Colorfunc(color)
      }
      else if(props.action==='update'){
          console.log('update',color) 
      }
      

  }

  const handleClick = (event) => {
    setAnchorEl(anchorEl ? null : event.currentTarget);
  };
  
  

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popper' : undefined;

  return (
    <div>
      
      <ColorLensIcon  onClick={handleClick}/>
      
      <Popper id={id} open={open} anchorEl={anchorEl}>
        <Box sx={{ border: 1, p: 1, bgcolor: 'background.paper', display:'flex'}}>
            {colorArray.map((color) => <div onClick={() => takeColor(color)} className='colorBox' style={{
           border: "1px solid black",
           backgroundColor: color,
            borderRadius: "50%",
           margin: "3px",
            width:"25px",
           height:"25px"}}>
              
           </div>)}

        </Box>
      </Popper>
    </div>
  );
}

export default SimplePopper