import React, { useState } from "react"
import "../Takenotetwo/Takenotetwo.css"
import PushPinOutlinedIcon from '@mui/icons-material/PushPinOutlined';
import AddAlertOutlinedIcon from '@mui/icons-material/AddAlertOutlined';
import PersonAddAlt1OutlinedIcon from '@mui/icons-material/PersonAddAlt1Outlined';
import ColorLensOutlinedIcon from '@mui/icons-material/ColorLensOutlined';
import ImageOutlinedIcon from '@mui/icons-material/ImageOutlined';
import ArchiveOutlinedIcon from '@mui/icons-material/ArchiveOutlined';
import MoreVertOutlinedIcon from '@mui/icons-material/MoreVertOutlined';
import UndoOutlinedIcon from '@mui/icons-material/UndoOutlined';
import RedoOutlinedIcon from '@mui/icons-material/RedoOutlined';
import { Postnotes } from "../../Service/dataservice";
import SimplePopper from "../Popper/popper";




function Takenotetwo(props){
    const[noteobj,setnoteobj]=useState({title:"",body:"",Archive:false,color:""})

    const Titlefunc=(event)=>{setnoteobj({...noteobj,title:event.target.value})}
    const Bodyfunc=(event)=>{setnoteobj({...noteobj,body:event.target.value})}
    const setIsArchive=(event)=>{setnoteobj({...noteobj, Archive:true })}
    const Colorfunc=(colorobj)=>{setnoteobj({...noteobj,color:colorobj})}
    

    function Returnone(){
        Postnotes(noteobj).then((respons)=>{console.log(respons)}).catch((error)=>{console.log(error)})
        //   props.listenTotakenote()


    }



    return(
        <div className="notetwo">
        <div className="notetwobox">
            <div className="Box1">
                <div className="input"><input onChange={Titlefunc} type ="text" placeholder="Title"/>
                {/* <PushPinOutlinedIcon/> */}
            </div>
            <div className="Box2">
                <input onChange={Bodyfunc} type="text" placeholder="Take a Note..."/>
            </div>
            <div className="notetwoIcons">
                <AddAlertOutlinedIcon/>
                <PersonAddAlt1OutlinedIcon/>
                <SimplePopper action="create"Colorfunc={Colorfunc}/>
                <ImageOutlinedIcon/>
                <ArchiveOutlinedIcon  onClick={setIsArchive}/>
                <MoreVertOutlinedIcon/>
                <UndoOutlinedIcon/>
                <RedoOutlinedIcon/>                
                <button onClick={Returnone}> Close</button>
            </div>
        </div>
    </div>
    </div>
    )   



}
export default Takenotetwo
