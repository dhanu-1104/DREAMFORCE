import React from 'react';
import "./App.css";

import BasicButtons from "./Components/button";
import SearchBar from "./Components/SearchBar";
import Dropdown from "./Components/Dropdown";
import Grid from "./Components/grid"

import logo from "./images/logo.png";
import Profile from "./images/profile.png";
import LHS from "./images/LHS.png";
import Profiles from "./images/proflies.png";


import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import ToggleOnIcon from '@mui/icons-material/ToggleOn';
import FlipToBackIcon from '@mui/icons-material/FlipToBack';
import FileDownloadDoneIcon from '@mui/icons-material/FileDownloadDone';
import SensorsIcon from '@mui/icons-material/Sensors';
import MarkEmailUnreadIcon from '@mui/icons-material/MarkEmailUnread';
import LightModeIcon from '@mui/icons-material/LightMode';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import GridViewIcon from '@mui/icons-material/GridView';
import FolderOpenIcon from '@mui/icons-material/FolderOpen';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';
import MarkUnreadChatAltIcon from '@mui/icons-material/MarkUnreadChatAlt';
import PeopleIcon from '@mui/icons-material/People';
import FilterAltOutlinedIcon from '@mui/icons-material/FilterAltOutlined';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';


function App(){

return(
    <>

    <div className="App" style={{color:"purple"}}>
   <img className="logo" src={logo} alt={"logo"}/>
    <SearchBar placeholder="Motivaider..." />
    <Dropdown />

        <MarkEmailUnreadIcon className="notifications"/>
        <LightModeIcon className="light" />
        <DarkModeIcon  className="dark" />
    </div>

        <div className="LHS">
            <div className="ProfileInfo">
                <span style={{color:"purple",fontSize:"25px"}}>
                    Mishel Prada
                </span>
                <br/>
                <span style={{color:"grey"}}>
                @mishelpd_88
            </span>
            </div>

           <img className="Profile" src={Profile} alt="profile" />
            <br/>
            <GridViewIcon className="dashBoard " /> <span className="Font2">Dashboard</span>
            <br/><br/>
            <FolderOpenIcon  className="dashBoard"/>{' '}<span className="Font2">Project Board</span>
            <br/><br/>
            <CalendarMonthIcon  className="dashBoard"/>{' '}<span className="Font2">Calender</span>
            <br/><br/>
            <AssignmentTurnedInIcon  className="dashBoard"/>{' '}<span className="Font2">Tasks</span>
            <br/><br/>
            <MarkUnreadChatAltIcon  className="dashBoard"/>{' '}<span className="Font2">Messages</span>
            <br/><br/>
            <PeopleIcon  className="dashBoard"/>{' '}<span className="Font2">Team Memebers</span>
            <br/><br/>
            <p className="create">No data to show,<br/>Create New task now</p>
            <img style={{width:"344px",position:"relative",bottom:"90px"}} src={LHS} alt={"lhslogo"}/>
            <BasicButtons childern={"Create New Task +"} />
        </div>

        <div className="RHS">
            <span className="RhsTitle">MotivAider</span>
            <span style={{position:"relative",left:"24px",color:"#32CD32"}}>
                In progress
                <KeyboardArrowDownIcon style={{position:"relative",top:"8px"}}/></span>
            <br/>
            <br/>
            <img style={{width:"10%",position:"relative",left:"340px",top:"2px"}} src={Profiles} alt={"profiles"}/>
            <button className={"AddMemeberButton"}>Add Memeber +</button>

            <SensorsIcon style={{position:"relative",left:"350px",    color: "rgba(0, 0, 0, 0.56)"}}/>
            <button className={"Firstbutton"}>  <FilterAltOutlinedIcon/> <span style={{position:"relative",bottom:"8px"}}>
                Filter
            </span>
            </button>{' '}
            <button className={"Firstbutton"}><CalendarTodayOutlinedIcon/><span style={{position:"relative",bottom:"8px"}}>
                Today
            </span>
            </button>
            <hr/>
            <div>
                <span className="Write" >Last updated on 23 November,2022</span>
                <button className={"secondRhs"}><FileDownloadDoneIcon/><span style={{position:"relative",bottom:"8px"}}>
                    All Task
                </span>
                </button>{' '}
                <button className={"secondRhs"}> <FlipToBackIcon/><span style={{position:"relative",bottom:"8px"}}>
                    Sort
                </span>
                </button>{' '}
                <button className={"secondRhs"}><ToggleOnIcon/><span style={{position:"relative",bottom:"8px"}}>
                    Customize
                </span>
                </button>
                {' '}
            </div>
            <hr/>
            <div className="Grid">
            <Grid />
            </div>
        </div>
        </>

);
}
export default App;
