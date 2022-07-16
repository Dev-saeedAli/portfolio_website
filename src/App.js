import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Introduction from './Components/Introduction/Introduction';
import { AiOutlineHome } from "react-icons/ai"
import { MdOutlinePermContactCalendar } from "react-icons/md"
import { CgDetailsMore } from "react-icons/cg"
import { BsChatLeftText, BsListUl } from "react-icons/bs"
import About from './Components/About/About';
import  { useState, createContext } from 'react';
import Theme from './Components/Theme/Theme';
import { Route, Routes } from 'react-router';
import Service from './Components/Service/Service';
import Portfolio from '../src/Components/Portfolio/Portfolio';
import Contact from './Components/Contact/Contact';

export const AppContext = createContext(null) 

function App() {
  const [path, setPath] = useState( null)
  const [themes, setThemes] = useState(false)
  const randomColors = ["red", "coral", "green", "blue", "purple"];
  const [bg, setBg] = useState("red")
  const [ darkMode, setDarkMode ] = useState(false)

  // making the darkMode to be active
  function changeMode(){
    setDarkMode(prevMode => !prevMode)
  }
  
   // making the theme icons to toggle colors
  function toggler(){
      setThemes(prevTheme => !prevTheme)
  }

  // changing the them if clicked
  function changeTheme(Theme){
    if(Theme){
      setBg(prevBg => Theme)
    }
}

  return (
    <div className="App">
      <AppContext.Provider value={
        { bg, setBg, darkMode,setDarkMode,themes,setThemes,randomColors,toggler,changeMode,changeTheme, path, setPath}}>
            <Navbar
              home={<AiOutlineHome/>}
              about={<MdOutlinePermContactCalendar/>}
              service={<BsListUl/>}        
              portfolio={<CgDetailsMore/>}
              contact={<BsChatLeftText/>}
              />

              <Routes>
                <Route path="/" element={(<Introduction/>)}/>

                <Route path="/about" element={(<About />)}/>

                <Route path="/service" element={(<Service />)}/>

                <Route path="/portfolio" element={(<Portfolio />)}/>

                  <Route path="/contact" element={(<Contact/>)}/>

                  </Routes>
              <Theme/>
            </AppContext.Provider>
    </div>
  );
}

export default App;
