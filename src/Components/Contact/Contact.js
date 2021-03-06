import React, { useContext, useRef, useState } from 'react'
import { CgDetailsLess } from "react-icons/cg"
import "../Contact/Contact.css"
import { contactDetail } from '../../data'
import { AppContext } from '../../App'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const {themes, bg, darkMode, setPath} = useContext(AppContext)
  const [loading, setloading] = useState(false)
  setPath(window.location.pathname)
  // console.log(path)
  const form = useRef(); // email js
  const nameInput = useRef()
  const emailInput = useRef()
  const subjectInput = useRef()
  const messageInput = useRef()

  // email js configue
  const sendEmail = (e) => {
    e.preventDefault();

    if(nameInput.current.value != "" && emailInput.current.value != "" && subjectInput.current.value != "" &&messageInput.current.value != ""){
      emailjs.sendForm('service_j91f3yq', 'template_y9odcaw', form.current, 'DofQ_cGWUupdelyDr')
      .then((result) => {
        setloading(true)
        notify()
        nameInput.current.value = ""
        emailInput.current.value = ""
        subjectInput.current.value = ""
        messageInput.current.value = ""
        setloading(false)
      }, (error) => {
        console.log(error.text);
      });
    }else{
      toast.error("Please enter all fields..")
    }

  };

  //xx email js configue xx
  const notify = () => {
    toast.success("Message send successfully", {
      position: "top-center",
      autoClose: 4000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    })
  }  

  return (
    <>
    <ToastContainer
      position="top-center"
      theme="dark"
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
    />
      <section className={darkMode ? `contact darkMode`: `contact `}>
        <div className="contact-heading">
            <h2>Contact Me</h2>
            <span className='svg' style={{color : bg}}><CgDetailsLess/></span>
        </div>

            <div className="contact-details">
                <div className="contact-header">
                    <h2 style={themes ? {color : bg} : {color : bg}}>You have any Questions?</h2>
                    <h4>I am at your service</h4>
                </div>
        </div>

               <div className="contact-body">
                 {contactDetail.map((contact)=>(
                     <>
                    <div className="contacts">
                        <div style={themes ?{color : bg}: {color : bg}} className='svg-detail'>{contact.svg}</div>
                        <h4>{contact.h4}</h4>
                        <p>{contact.p}</p>
                    </div>
                     </>
                 ))}
                </div>

        <div className="email-form">
            <div className="form-header">
            <h2 style={themes ? {color : bg} : { color : bg}}>Send me an email</h2>
            <p>I am very responsive to messages</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input ref={nameInput} type="text" name="name" className='name'  placeholder='Name'/>
                <input ref={emailInput} type="email" name="email" className='email'  placeholder='Email'/>
                <input ref={subjectInput} type="subject" name="subject" className='subject'  placeholder='Subject'/>
                <textarea ref={messageInput} name="message" className="message" id="message" cols="30" rows="7" placeholder='Message'></textarea>
                <button style={themes ? {background : bg} : { background : bg}} role="button" type='submit' className="btn">{loading ? "Sending" : "Send an messsage"}</button>
            </form>
        </div>
      </section>
    </>

  )
}

export default Contact
