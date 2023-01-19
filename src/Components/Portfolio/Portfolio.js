import React, { useContext } from 'react'
import { CgDetailsLess } from "react-icons/cg"
import { images } from "../../data"
import { AppContext } from '../../App'
import "../Portfolio/Portfolio.css"

function Porfolio() {
  const {bg, darkMode} = useContext(AppContext)

  return (
    <>
       <section className={darkMode ? 'darkMode portfolio': "portfolio"}>
            <div className="portfolio-heading">
                <h2>Portfolio</h2>
                <span className='svg' style={{color : bg}}><CgDetailsLess/></span>
            </div>
            <div className="project-container">
            <div className="project-header">
                <h4>My Latest Projects :&nbsp;</h4>
            </div>
                <div className="project-body">
                  {images.map((image, index)=>(
                      <div key={index}>
                        <div className="project-img">
                            <img loading="lazy" src={image.img} alt="project"/>
                          <div className="fade"></div>
                          <div className="btn-container">
                          <a style={{background : bg }} className="btn" target="_blank" rel='noreferrer' href={image.github}>Github</a>
                          <a style={{background : bg }} target="_blank" rel='noreferrer'  href={image.link} className="btn" >Website</a>
                          </div>
                        </div>
                      </div>
                  ))}
                </div>
            </div>
        </section>
    </>
  )
}

export default Porfolio
