import React, { Fragment, useContext, useRef, useState } from 'react'
import { CgDetailsLess } from "react-icons/cg"
import "../Contact/Contact.css"
import { contactDetail } from '../../data'
import { AppContext } from '../../App'
import emailjs from '@emailjs/browser';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Contact() {
  const {bg, darkMode} = useContext(AppContext)
  const [loading, setloading] = useState(false)
  // console.log(path)
  const form = useRef(); // email js
  const nameInput = useRef()
  const emailInput = useRef()
  const subjectInput = useRef()
  const messageInput = useRef()

  //notify 
  const notify = () => toast.success("Your message has been submitted successfully!");
  const notifyLoading = () => toast.info("Sending the message", { autoClose: 200,});
  // email js configue
  const sendEmail = (e) => {
    e.preventDefault();
    
    if(nameInput.current.value !== "" && emailInput.current.value !== "" && subjectInput.current.value !== "" &&messageInput.current.value !== ""){
      notifyLoading()
      emailjs.sendForm('service_j91f3yq', 'template_y9odcaw', form.current, 'DofQ_cGWUupdelyDr')
      .then((result) => {
        setloading(true)
        nameInput.current.value = ""
        emailInput.current.value = ""
        subjectInput.current.value = ""
        messageInput.current.value = ""
        setloading(false)
        notify()
      }, (error) => {
        console.log(error.text);
      });
    }else{
      toast.error("Please enter all fields..")
    }

  };


  return (
    <>
      <section className={darkMode ? `contact darkMode`: `contact `}>
        <ToastContainer 
         position="top-center"
         autoClose={5000}
         hideProgressBar={false}
         newestOnTop={false}
         closeOnClick
         rtl={false}
         pauseOnFocusLoss
         draggable
         pauseOnHover
         theme="dark"/>
        <div className="contact-heading">
            <h2>Contact Me</h2>
            <span className='svg' style={{color : bg}}><CgDetailsLess/></span>
        </div>

            <div className="contact-details">
                <div className="contact-header">
                    <h2 style={{color: bg}}>You have any Questions?</h2>
                    <h4>I am at your service</h4>
                </div>
        </div>

               <div className="contact-body">
                 {contactDetail.map((contact, index)=>(
                     <Fragment key={index}>{
                      contact.link ? ( 
                        <a target="_blank" rel='noreferrer' href={contact.link ? `${contact.link}` :""}>
                        <div className="contacts">
                            <div style={{color:bg}} className='svg-detail'>{contact.svg}</div>
                            <h4>{contact.h4}</h4>
                            <p>{contact.p}</p>
                        </div>
                         </a>
                      ) : ( 
                     <div className="contacts">
                      <div style={{color:bg}} className='svg-detail'>{contact.svg}</div>
                      <h4>{contact.h4}</h4>
                      <p>{contact.p}</p>
                    </div>)
                     }
                     </Fragment>
                 ))}
                </div>

        <div className="email-form">
            <div className="form-header">
            <h2 style={{color:bg}}>Send me an email</h2>
            <p>I am very responsive to messages</p>
            </div>
            <form ref={form} onSubmit={sendEmail}>
                <input ref={nameInput} type="text" name="name" className='name'  placeholder='Name'/>
                <input ref={emailInput} type="email" name="email" className='email'  placeholder='Email'/>
                <input ref={subjectInput} type="subject" name="subject" className='subject'  placeholder='Subject'/>
                <textarea ref={messageInput} name="message" className="message" id="message" cols="30" rows="7" placeholder='Message'></textarea>
                <button style={{background:bg}}  type='submit' className="btn" >{loading ? "Sending" : "Send an messsage"}</button>
            </form>
        </div>
      </section>
    </>

  )
}

export default Contact
