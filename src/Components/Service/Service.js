import React, { useContext } from 'react'
import "../Service/Service.css"
import { CgDetailsLess } from "react-icons/cg"
import { service } from "../../data"
import { AppContext } from '../../App'

function Service() {
  const { bg, darkMode} = useContext(AppContext)

    const details = service.map((item, index)=>{
        return (
            <div key={index} className={!darkMode ? 'card': 'card-darkmode card'}>
               <div className='svg' style={{background: bg}}>{item.svg}</div>
              <h3>{item.header}</h3>
              <p>{item.para}</p>
            </div>
        )
    })
  return (
      <>
     <section className={darkMode ? 'darkMode service': "service"}>
      <div className="service-heading">
        <h2>Services</h2>
        <span className='svg' style={{color : bg}}><CgDetailsLess/></span>
      </div>

      <div className="cards">
          {details}
      </div>
    </section>
    </>
  )
}

export default Service
