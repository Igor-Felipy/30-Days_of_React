import ReactDOM from 'react-dom'
import React from 'react'
import HTMLImage from './images/HTML.png'
import CSSImage from './images/CSS.png'
import JavScriptImage from './images/JavaScript.png'
import ReactImage from './images/React.png'
import IgorFelipy from './images/Igor_felipy.jpg'



const techImages = (
    <div className="techImages-wrapper">
        <p><strong>Front End Technologies</strong></p>
        <img src={HTMLImage} alt="HTML" width="13%" height="100%"/>
        <img src={CSSImage} alt="CSS" width="9%" height="100%"/>
        <img src={JavScriptImage} alt="JavaScript" width="10%" height="100%"/>
        <img src={ReactImage} alt="React" width="19%" height="100%"/>
    </div>
)



const skills = ['HTML','CSS','JavaScript','Python','Flask','Selenium','git','linux','MySQL','MongoDB','sqlite']
const skillFormated = skills.map((skill) => <li key={skill}>{skill}</li>)

const userCard = (
    <div className="userCard-wrapper">
        <img src={IgorFelipy}/>
        <h2>Igor Felipy</h2>
        <p>Full Stack Developer | Brazil</p>
        <h3>Skills:</h3>
        <ul>{skillFormated}</ul>
        <small>Joined on out 5, 2020</small>
    </div>
)

const subscribe = (
    <div className="subscribe-wrapper">
        <h2>Subscribe</h2>
        <p>Sign up with your email address to receive news and updates.</p>
        <form>
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="Email"></input>
            <button>Subscribe</button>
        </form>
    </div>
)

const app = (
    <div>
        {techImages}
        {userCard}
        {subscribe}
    </div>
)
const rootElement = document.getElementById('root')
ReactDOM.render(app,rootElement)