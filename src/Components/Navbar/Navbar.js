import React, { useContext } from 'react'
import "../Navbar/Navbar.css"
import { GiHamburgerMenu } from "react-icons/gi" 
import { AiOutlineCloseSquare } from "react-icons/ai" 
import { Link, useLocation } from 'react-router-dom';
import { AppContext } from '../../App';



function Navbar({home, about, service, portfolio, contact}) {
  const location = useLocation()
  const {bg, darkMode, navactive, setNavactive
  } = useContext(AppContext)

  
  return (
    <>
   <div className={ darkMode && navactive ? `navbar darkMode navactive`: darkMode ? `navbar darkMode` : navactive ? `navbar navactive` : `navbar`}>
      <header>
        <span className="navSpanFirst" style={{color:`${bg}`}}>L</span>
          <h2>Portfolio</h2>
        <span className="navSpanSecond" style={{color:`${bg}`}}>L</span>
      </header>
      <nav>
        <ul>
          {/* adding active state color to the nav components and darkMode styling*/}
          <Link to={"/"} style={(
             location.pathname === "/"? {background : bg, width : "95%", padding : "8px 0px",fontWeight : "700", color : "white", borderRadius : "10px"} : null)
            }> <span  className={darkMode ? `icons darkMode`: `icons`}>{home}Home</span></Link>

          <Link to={"/about"} style={(
            location.pathname === "/about"? {background : bg, width : "95%", padding : "8px 0px",fontWeight : "700", color : "white", borderRadius : "10px"} : null)
            } ><span  className={darkMode ? `icons darkMode`: `icons`}>{about}About</span></Link>

          <Link to={"/service"}style={(
             location.pathname === "/service"? {background : bg, width : "95%", padding : "8px 0px",fontWeight : "700", color : "white", borderRadius : "10px"} : null)
            }> <span  className={darkMode ? `icons darkMode`: `icons`}>{service}Services</span></Link>

          <Link to={"/portfolio"} style={(
             location.pathname === "/portfolio"? {background : bg, width : "95%", padding : "8px 0px",fontWeight : "700", color : "white", borderRadius : "10px"} : null)
            }> <span  className={darkMode ? `icons darkMode`: `icons`}>{portfolio}Portfolio </span></Link>         

          <Link to={"/contact"}style={(
             location.pathname === "/contact"? {background : bg, width : "95%", padding : "8px 0px",fontWeight : "700", color : "white", borderRadius : "10px"} : null)
            }> <span  className={darkMode ? `icons darkMode`: `icons`}>{contact}Contact</span></Link>
           {/* adding active state color to the nav components and darkmode styling*/}
        </ul>
      </nav>
      <div style={{color:bg}} className={navactive ? "burgeractive" : "burger-menu"}>{ navactive ? <AiOutlineCloseSquare onClick={()=> setNavactive(prevActive => !prevActive)}/>:<GiHamburgerMenu onClick={()=> setNavactive(prevActive => !prevActive)}/>}</div>
    </div>
     </>
  )
}

export default Navbar
