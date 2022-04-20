import React from "react";
import "../Takenotethree/Takenotethree.css"
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import SimplePopper from "../Popper/popper";


function Takenotethree(props) {
  return (

    <div className="notethreebox" style={{backgroundColor:props.note.color}}>
      <div className="Boxone" style={{backgroundColor:props.note.color}} >
        {props.note.title}

        <PushPinOutlinedIcon />
      </div>


      <div className="Boxtwo" style={{backgroundColor:props.note.color}} >
        {props.note.body}
      </div>


      <div className="Boxthree" style={{backgroundColor:props.note.color}}>
        <AddAlertOutlinedIcon />
        <PersonAddAlt1OutlinedIcon />
        <SimplePopper action="update"/>
        <ImageOutlinedIcon />
        <ArchiveOutlinedIcon />
        <MoreVertOutlinedIcon />
      </div>
    </div>


  )



}

export default Takenotethree
