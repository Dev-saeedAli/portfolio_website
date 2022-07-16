import React, { useContext } from 'react'
import "../Theme/Theme.css"
import { AiFillSetting } from "react-icons/ai"
import { MdBrightness6 } from "react-icons/md"
import App, { AppContext } from '../../App'

function Theme() {
  const {themes, toggler, randomColors, changeTheme, changeMode} = useContext(AppContext)
  // console.log(darkMode)

  return (
    <>
      <div className={themes ? "theme-icons active darkMode" : "theme-icons"}>
            <AiFillSetting onClick={toggler}/>
            <MdBrightness6 onClick={changeMode}/>
        </div>
          <div className={themes ? "theme-colors" : "theme-colors none"}>
            <div className="theme-header">
              <h4>Theme colors</h4>
            </div>
                <div className="themes">
                <div className={`${randomColors[0]}`} onClick={(e)=> changeTheme(e.target.className) }></div>
                <div className={`${randomColors[1]}`} onClick={(e)=> changeTheme(e.target.className)}></div>
                <div className={`${randomColors[2]}`} onClick={(e)=> changeTheme(e.target.className)}></div>
                <div className={`${randomColors[3]}`} onClick={(e)=> changeTheme(e.target.className)}></div>
                <div className={`${randomColors[4]}`} onClick={(e)=> changeTheme(e.target.className)}></div>
            </div>
          </div>
    </>
  )
}

export default Theme
