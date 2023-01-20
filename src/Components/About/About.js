import React, { useContext } from 'react'
import { CgDetailsLess } from "react-icons/cg"
import "../About/About.css"
import { AiFillCalendar } from "react-icons/ai"
import { dataExp, dataEduc} from "../../data"
import { AppContext } from '../../App';
import { Link } from 'react-router-dom'
import personalCv from "../../Images/Saeed-Ali-Resume.pdf"


function About() {
  const { bg, darkMode} = useContext(AppContext)
  const educ = dataEduc.map((data, index) =>{
    return (
      <div className='edu-header' key={index}>
        <span><AiFillCalendar/>{data.year}</span>
        <h4>{data.certificate}</h4>
        <p>{data.para}</p>
      </div>
    )
  })
  const exp = dataExp.map((data, index) =>{
    return (
      <div className='exp-header' key={index}>
        <span><AiFillCalendar/>{data.year}</span>
        <h4>{data.company}</h4>
        <p>{data.para}</p>
      </div>
    )
  })

 
  return (
    <>
     <section className={darkMode ? `about darkMode`: `about `}>
      <div className="about-heading">
        <h2>About Me</h2>
        <span className='svg' style={{color : bg}}><CgDetailsLess/></span>
      </div>
      <div className="about-intro">
        <h3>I'm Mohammed Said Ali and a <span className='name' style={{color: bg}}>Front End Web Developer.</span></h3>        
        <p>Recently I have discovered my passion towards the world of web development and the beauty behind developing new useful websites like the one you will find in this portfolio.l' m now looking for a junior web development position to finally kick start my career & learn among professionals.</p>
      </div>
      <div className="details-section">
        <div className="details-info">

          <span className='head'>Birthday : &nbsp;  <span className='body'>16 November 1999</span></span>
          <span className='head'>Degree : &nbsp;  <span className='body'> B COM</span></span>
          <span className='head'>Nationality : &nbsp;  <span className='body'>Indian</span></span>
          <span className='head'>Place : &nbsp;  <span className='body'>Umm al Quwain</span></span>
          <span className='head'>Age : <span className='body'> 23</span></span>
          <span className='head'>Email : &nbsp;  <span className='body'> devsaidali777@gmail.com</span></span>
          <span className='head'>Phone Number : &nbsp;  <span className='body'>+971-54-767-9616</span></span>
          <div className="btn-group">
          <div className="btn" style={{backgroundColor : bg}}><a href={personalCv} download>Download Cv</a></div>
          <div className="btn" style={{backgroundColor : bg}}><Link to="/contact">Hire Me</Link></div>
          </div>
        </div>

          <div className="details-knowledge">
                <label htmlFor="html"><div>HTML5</div><div>75%</div></label>
                <meter style={{backgroundColor : bg}}  className="html" id='html' value={7.5} min={0} max={10}>75%</meter>

                <label htmlFor="css"><div>CSS3</div><div>70%</div></label>
                <meter style={{backgroundColor : bg}}  className="html" id='css' value={7} min={0} max={10}>70%</meter>

                <label htmlFor="javascript"><div>Vanilla Javascript</div><div>60%</div></label>
                <meter style={{backgroundColor : bg}}  className="html" id='javascript' value={5.5} min={0} max={10}>60%</meter>

                <label htmlFor="react"><div>React Js & Redux Toolkit</div><div>65%</div></label>
                <meter style={{backgroundColor : bg}}  className="html" id='react' value={6} min={0} max={10}>65%</meter>

                <label htmlFor="bootstrap"><div>Bootstrap5</div><div>70%</div></label>
                <meter style={{backgroundColor : bg}}  className="html" id='bootstrap' value={7} min={0} max={10}>70%</meter>

                <label htmlFor="sass"><div>Sass</div><div>65%</div></label>
                <meter style={{backgroundColor : bg}}  className="html" id='sass' value={6.5} min={0} max={10}>65%</meter>
          </div>
      </div>

      <div className="roles">    
        <div className={darkMode ? "darkMode education-container":"education-container"}>
            <h3>Education<hr/></h3>
          <div className="education">
            {educ}
          </div>
        </div>

        <div className={darkMode ? "experience-container darkMode" : "experience-container"}>
            <h3>Experience<hr/></h3>
          <div className="experience">
          {exp}
          </div>
        </div>
      </div>
     </section>     
    </>
  )
}

export default About

