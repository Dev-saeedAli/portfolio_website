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
import ninethimage from "../src/Images/project_9.png"
import tenthimage from "../src/Images/quiz_app.png"
import eleventhimage from "../src/Images/blue_star.png"
import twelvthimage from "../src/Images/twelvthimage.png"
import { FiPhoneCall } from "react-icons/fi"
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from "react-icons/ai"

// education
const dataEduc = [
    {
        year : "2016",
        certificate : "Certificate of X from The New Indian School",
        para : "New Indian School is one of the top schools in Umm Al Quwain, United Arab Emirates. It follows the CBSE and Kerala Board Curriculum."
    },
    {
        year : "2016-2018",
        certificate : "Certificate of XII from The English School",
        para : "The English Private School in Umm Al Quwain was founded in 1983 with a handful of students and teachers. It moved to a new campus in 2009."
    },
    {
        year : "2020-2023",
        certificate : "Certificate of BCOM from Brilliance Educational Group",
        para : "Brillianz Group is one of the prominent and prestigious education provider in the GCC with a track record of fourteen glorious years."
    },
]

const dataExp = [
    {
        year : "2020 - 2021",
        company : "Cititrans Logistics L.L.C",
        para : "My work included coordinating shipments, Runsheet preparation, Managing problem shipments, updation of customer details, customer service , scanning of new shipment orders, Sorting parcels for delivery order."
    },
    {
        year : "2021 - 2022",
        company : "Amrut Pure Drinking Water",
        para : "My work included managing the income of current year, distribution of slips to sales representatives, receiving daily income and recording the system, managing accounts in tally erp9."
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
        img : tenthimage ,
        link: "https://quiz-app-dev-said.netlify.app/",
        github : "https://github.com/Dev-saeedAli/quiz__application"
    },
    {
        img : eleventhimage ,
        link: "https://blue-star-ecommerce-dev.netlify.app/",
        github : "https://github.com/Dev-saeedAli/blue-star-ecommerce-"
    },
    {
        img : twelvthimage ,
        link: "https://tip-calculator-dev-saeed.netlify.app/",
        github : "https://github.com/Dev-saeedAli/tip_calculator"
    },
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
    {
        img : ninethimage ,
        link: "https://quiz-app-js-2022.netlify.app/",
        github : "https://github.com/Dev-saeedAli/quiz_javascript"
    },
]

// contacts
const contactDetail = [
    {
        h4 : "Call Me On",
        p : "971-54-767-9616",
        svg : <FiPhoneCall/>
    },
    {
        h4 : "Email",
        p : "devsaidali777@gmail.com",
        svg : <AiOutlineMail/>
    },
    {
        h4 : "GITHUB",
        p : "Dev-saeedAli",
        svg : <AiFillGithub/>,
        link : "https://github.com/Dev-saeedAli"
    },
    {
        h4 : "Linkedin",
        p : "Dev Saeed",
        svg : <AiFillLinkedin/>,
        link : "https://www.linkedin.com/in/mohammed-said-ali/"
    },
]
export  { dataEduc, dataExp, service, images, contactDetail};