import React from "react";
import "../Header/Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import RefreshIcon from '@mui/icons-material/Refresh';
import ViewAgendaOutlinedIcon from '@mui/icons-material/ViewAgendaOutlined';
import ViewAgendaOutlined from "@mui/icons-material/ViewAgendaOutlined";
import SettingsIcon from '@mui/icons-material/Settings';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import AppsIcon from '@mui/icons-material/Apps';

function Header(){
    return(
        <div>
            <div className="header">

<div className="First">
     <MenuIcon/>

    <img src="https://www.gstatic.com/images/branding/product/1x/keep_2020q4_48dp.png" alt="logo"/>

    <span>Keep</span>
</div>

<div className="Second">
    <input type="text" placeholder="Search"/>
</div>

<div className="Third">
      
    <RefreshIcon/>

    <ViewAgendaOutlined/>

    <SettingsIcon/>  
</div>

<div className="Fourth">
    <div>
    <AppsIcon/>
    </div>

    <div>
    <AccountCircleIcon/>
    </div>

</div>
</div>

        </div>
    )

}

export default Header