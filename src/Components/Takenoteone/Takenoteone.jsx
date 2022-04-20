import React from "react";
import "../Takenoteone/Takenoteone.css"
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import BrushOutlinedIcon from '@mui/icons-material/BrushOutlined';
import InsertPhotoOutlinedIcon from '@mui/icons-material/InsertPhotoOutlined';

function Takenoteone(props){
    function switchnote(){
        props.listenTotakenote()
    }
    return(   
        <div>
            <div onClick={switchnote} className ="noteone">    
        <div className="noteonebox">
            <div className="input">
                <input type="text" placeholder="Take a Note..."/>
            </div>
                <div className="noteoneicons">
                    <CheckBoxOutlinedIcon/>

                    <BrushOutlinedIcon/>

                    <InsertPhotoOutlinedIcon/>  
                </div>    
        </div>
    </div>
         </div>
    )
}

export default Takenoteone