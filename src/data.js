import { BsLaptop } from "react-icons/bs"
import { GoDeviceMobile } from "react-icons/go"
import { FaReact } from "react-icons/fa"
import { IoColorPaletteOutline } from "react-icons/io5"
import { HiOutlineMailOpen } from "react-icons/hi"
import { SiJavascript } from "react-icons/si"
import firstimage from "../src/Images/project_1.png"
import secondimage from "../src/Images/project_2.png"
import thirdimage from "../src/Images/project_3.png"
import fourthimage from "../src/Images/project_4.png"
import fifthimage from "../src/Images/project_5.png"
import sixthimage from "../src/Images/project_6.png"
import seventhimage from "../src/Images/project_7.png"
import eighthimage from "../src/Images/project_8.png"
import { FiPhoneCall } from "react-icons/fi"
import { GoLocation } from "react-icons/go"
import { AiOutlineMail } from "react-icons/ai"
import { BsInstagram } from "react-icons/bs"

// education
const dataEduc = [
    {
        year : "2016",
        certificate : "Certificate of X from The New Indian School",
        para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quas corporis rem laborum dolorem rerum asperiores dolore! Quibusdam, autem minus?"
    },
    {
        year : "2016-2018",
        certificate : "Certificate of XII from The English School",
        para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quas corporis rem laborum dolorem rerum asperiores dolore! Quibusdam, autem minus?"
    },
    {
        year : "2020-2023",
        certificate : "Certificate of BCOM from Brilliance Educational Group",
        para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quas corporis rem laborum dolorem rerum asperiores dolore! Quibusdam, autem minus?"
    },
]

const dataExp = [
    {
        year : "2020 - 2021",
        company : "Cititrans Logistics L.L.C",
        para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quas corporis rem laborum dolorem rerum asperiores dolore! Quibusdam, autem minus?"
    },
    {
        year : "2021 - 2022",
        company : "Amrut Pure Drinking Water",
        para : "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Fuga quas corporis rem laborum dolorem rerum asperiores dolore! Quibusdam, autem minus?"
    }
]

// services 
const service = [
    {
        svg : <BsLaptop/>,
        header : "Web Development",
        para : "Web development refers to building, creating, and maintaining websites. It includes aspects such as web design, web publishing, web programming, and database management."
    },
    {
        svg : <GoDeviceMobile/>,
        header : "Responsive Design",
        para : "Responsive design allows your website content to flow freely across all screen resolutions and sizes, and renders it to look great on all devices. "
    },
    {
        svg : <FaReact/>,
        header : "React Development",
        para : "ReactJS developers are front-end developers who build modern-day UI components to improvise application performance. "
    },
    {
        svg : <IoColorPaletteOutline/>,
        header : "Web Design",
        para : " A web designer is responsible for creating the design and layout of a website or web pages. It and can mean working on a brand new website or updating an already existing site."
    },
    {
        svg : <HiOutlineMailOpen/>,
        header : "Email Developer",
        para : "An email developer designs and builds email blasts for clients and marketing teams. In this career, your duties primarily revolve around creating templates in HTML."
    },
    {
        svg : <SiJavascript/>,
        header : "Javascript Development",
        para : "A JavaScript developer is responsible for implementing the front-end logic that defines the behavior of the visual elements of a web application"
    },
]


// portfolio images
const images =[
    {
        img : firstimage,
        link: "https://netflix-clone-react-2022.netlify.app/",
        github : "https://github.com/Dev-saeedAli/netflix_clone"
    },
    {
        img : secondimage, 
        link: "https://emperor-carwash.netlify.app",
        github : "https://github.com/Dev-saeedAli/emperor"
    },
    {
        img : thirdimage ,
        link: "https://country-api-2022.netlify.app",
        github: "https://github.com/Dev-saeedAli/country_ap"
    },
    {
        img : fourthimage ,
        link: "https://quotes-app-2022.netlify.app",
        github:"https://github.com/Dev-saeedAli/quotes_app"
    },
    {
        img : fifthimage ,
        link: "https://dictionary-app-2022.netlify.app",
        github: "https://github.com/Dev-saeedAli/dictionary"
    },
    {
        img : sixthimage ,
        link: "https://todo-app-said.netlify.app",
        github: "https://github.com/Dev-saeedAli/todo_app"
    },
    {
        img : seventhimage ,
        link: "https://fylo-website-2022.netlify.app",
        github: "https://github.com/Dev-saeedAli/fylo_website"
    },
    {
        img : eighthimage ,
        link: "https://notes-app-new-2022.netlify.app",
        github : "https://github.com/Dev-saeedAli/notes"
    },
]

// contacts
const contactDetail = [
    {
        h4 : "Call Me On",
        p : "054-767-9616",
        svg : <FiPhoneCall/>
    },
    {
        h4 : "Place",
        p : "Umm al Quwain",
        svg : <GoLocation/>
    },
    {
        h4 : "Email",
        p : "mohammedsaidali69@gmail.com",
        svg : <AiOutlineMail/>
    },
    {
        h4 : "Instagram",
        p : "godzilla_islive",
        svg : <BsInstagram/>
    },
]
export  { dataEduc, dataExp, service, images, contactDetail} ;