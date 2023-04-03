
import React from'react'
import profile from "/Users/dhanushkumarg/Documents/task2deamforce/src/images/proflies.png"
import "./grid.css"
import Phones from"/Users/dhanushkumarg/Documents/task2deamforce/src/images/phones.png"
import Grid2 from"/Users/dhanushkumarg/Documents/task2deamforce/src/images/grid2.png"
import Grid3 from"/Users/dhanushkumarg/Documents/task2deamforce/src/images/grid3.png"
import Grid4 from"/Users/dhanushkumarg/Documents/task2deamforce/src/images/2.2.png"
import Grid5 from"/Users/dhanushkumarg/Documents/task2deamforce/src/images/2.3.png"
import Grid6 from"/Users/dhanushkumarg/Documents/task2deamforce/src/images/lastgrid.png"



function Grid() {
    return (
        <div className="grid-container">
            <div className="grid-item">App UI Redisign<br/>
            <button className={"MobileButton"} >mobile</button>
                <button className={"RedesignButton"}>Redesign</button><br/>
                <span className={"itemFonts"}>Assigned to</span>{' '}
                <img  style={{width:"40%",position:"relative",right:"90px",top:"45px"}} src={profile} alt={profile}/>
                <span  className={"itemFonts"} style={{position:"relative",left:"14px"}}>task </span>
                <span  className={"itemFonts"} style={{position:"relative",left:"39px",}}> hours</span><br/>
                <span  className={"itemFonts"} style={{position:"relative",left:"260px",fontSize:"34px",color:"purple"}}>16 </span>
                <span  className={"itemFonts"} style={{position:"relative",left:"280px",fontSize:"34px",color:"purple"}}> 68</span>
                <br/>
                <img className={"Phones"} src={Phones} alt={Phones} /><br/><br/>
                <span className={"itemFonts"} style={{position:"relative",left:"14px",color:"purple"}}>MotivAider_App_Design.fig</span>
                <button className={"OpenButton"}>Open</button>
            </div>
            <div className="grid-item-2">Landing Page Design<br/>

                <span className={"itemFonts-2ndgrid"}>Present all the section to the client and get feedback for the same</span><br/>
                <br/><img style={{width:"90%",position:"relative",left:"10px"}} src={Grid2} alt={Grid2} className={"Phones"} />

            </div>
            <div className="grid-item-2">Client Feedback<br/>
                <button className={"MobileButton"} style={{backgroundColor:"orange"}}>Priority</button>
                <button className={"RedesignButton"}style={{backgroundColor:"#4CBB17",fontSize:"10px",}}>Connection</button><br/><br/>
                by Rainn Wilson<br/>
                <br/><img style={{width:"90%",position:"relative",left:"10px"}} src={Grid3} alt={Grid2} className={"Phones"} />


            </div>
            <div className="grid-item-2-11">Dev Call<br/>

                <span className={"itemFonts-2ndgrid"}>we Plan to discuss new features upcoming which we are going to implement</span>
                <img style={{width:"70%",position:"relative",left:"40px",top:"10px"}} src={Grid4} alt={Grid2} className={"Phones"} />>

            </div>
            <div className="grid-item-2-1">Team Meeting<br/>

                <span className={"itemFonts-2ndgrid"} >Join the team meeting now </span>
                <img style={{width:"90%",position:"relative",left:"10px"}} src={Grid5} alt={Grid2} className={"Phones"} />
                <span className={"itemFonts"} style={{position:"relative",left:"14px",color:"purple",top:"20px"}}>
                  >>Join Call
                </span>
            </div>
            <div className="grid-item-2-1">Dev Timesheet<br/>

                <span className={"itemFonts-2ndgrid"}>By sofia Nomvete</span>
                <img style={{width:"90%",position:"relative",left:"20px",top:"10px"}} src={Grid6} alt={Grid2} className={"Phones"} />
                <span className={"itemFonts"} style={{position:"relative",left:"14px",color:"purple",top:"20px"}}>
                  >>performance
                </span>

            </div>






        </div>

    )
}
    export default Grid