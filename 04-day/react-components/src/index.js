import React from 'react';
import ReactDOM from 'react-dom';


const Header = () => (
  <header>
    <div className="header-wrapper">
      <h1>Welcome to 30 Days os React</h1>
      <h2>Getting Started React</h2>
      <p>Igor Felipy</p>
      <small>Oct 7, 2020</small>
    </div>
  </header>
)

const UserCard = () => (
  <div>
    <img/>
    <h2>Igor Felipy</h2>
  </div>
)

const TechList = () => {
  const techs = ['HTML','CSS','JS']
  const techsFormated = techs.map((tech) => <li key={tech}>{tech}</li>)
  return techsFormated
}

const Main = () => (
  <main>
    <div className="main-wrapper">
      <p>Prerequisite to get started react.js:</p>
      <ul>
        <TechList />
      </ul>
      <UserCard/>
    </div>
  </main>
)

const Footer = () => (
  <footer>
    <div className="footer-wrapper">
      <p>Copyright 2020</p>
    </div>
  </footer>
)

const App = () => (
  <div className='app'>
    <Header />
    <Main />
    <Footer />
  </div>
)

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)