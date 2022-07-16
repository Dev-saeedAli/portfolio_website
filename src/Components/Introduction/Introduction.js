import React, { useState, useEffect, useContext } from 'react'
import userImage from "../../Images/userBg.jpg"
import "./Introductio.css"
import { Link } from 'react-router-dom';
import { AppContext } from '../../App';

function Introduction () {
  const { bg, darkMode, path, setPath} = useContext(AppContext)
  setPath( window.location.pathname)
  // console.log(path)
  const words = ["Web developer... ", "Web designer... ", "React developer... "];
    const [currentText, setCurrentText] = useState("");
    let count = 1;
    let word_no = 0;

    function writeText(){
      let characters = words[word_no].slice(0, count)
      count = count + 1;
      setCurrentText(characters);
      if(count > words[word_no].length){
        word_no = word_no + 1;
        count = 0
      }
      if(word_no === words.length){
        word_no = 0
      }
    }
    useEffect(()=>{
     setInterval(()=>{
        writeText()
     }, 340)
    },[])

  return (
        <>
      <section className={ darkMode ? `home darkMode animate`: `home animate`}>
          <div className="intro-description">
              <h3>Hello, my name is <span className="name" style={{color:`${bg}`}}>Mohammed Said Ali.</span></h3>
              <h4>I am a <span className='name' style={{color:`${bg}`}} id="name">{currentText}</span><span className='line'>|</span></h4>
            
              <p>I am a front-end web developer with extensive experience for over a year. My expertise is to develop and website design and much more...</p>
              <Link to={"/about"} className='btn' style={{background:`${bg}`}}>About me</Link>
          </div>

          <div className="intro-image">
              <span className='spanFirst' style={{color:`${bg}`}}>L</span>
                <img src={userImage} alt="user-image" />
              <span className='spanSecond' style={{color:`${bg}`}}>L</span>
          </div>
      </section>
    </>
  )
}

export default Introduction
