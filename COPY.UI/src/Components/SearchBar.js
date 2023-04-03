import React from 'react';
import "./SearchBar.css";
import SearchIcon from '@mui/icons-material/Search';
import KeyboardVoiceIcon from '@mui/icons-material/KeyboardVoice';
import GraphicEqIcon from '@mui/icons-material/GraphicEq';


function SearchBar({placeholder,runSearch}){
    return(
        <>
        <div className="search">
            <div className="searchInput">
                <div className="haptics">
                    <GraphicEqIcon />
                </div>
                <input  type="text" placeholder={placeholder}/>
                <div className="searchIcon">
                <SearchIcon />
                </div>
                <div className="searchIcon">
                   |
                </div>
                <div className="mic">
                    <KeyboardVoiceIcon />
                </div>
            </div>
        </div>
            </>

    )
}
export default SearchBar;

