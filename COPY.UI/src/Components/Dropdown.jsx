import React from "react";
import  "./Dropdown.css"
import Face3Icon from '@mui/icons-material/Face3';


const DropDown = () => {
    return(
        <div className="dropdown">
            <button className="dropButton">
                <Face3Icon />{' '}
                Hey,Mishel </button>
            <div className="dropdown-content">
                <a href="https://www.youtube.com/shorts/HHORseph9dQ">Profile</a>
                <a href="https://www.youtube.com/shorts/HHORseph9dQ">Settings</a>
                <a href="https://www.youtube.com/shorts/HHORseph9dQ">Logout</a>
            </div>

        </div>

    )
}
export default DropDown;