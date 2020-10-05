import React from 'react';
import ReactDOM from 'react-dom'
import igorImage from './images/Igor_felipy.jpg'


const welcome = 'Welcome to 30 day of react'
const title = 'Getting Started React'
const subtitle = 'JavaScript Library'
const autor = {
  firstName: 'Igor',
  lastName: 'Felipy',
}

const date = 'Oct 05, 2020'

const header = (
  <header>
    <div className='header-wrapper'>
      <h1>{welcome}</h1>
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <p>{autor.firstName} {autor.lastName}</p>
      <small>{date}</small>
    </div>
  </header>
)

const  numOne = 3
const numTwo = 2

const result = (
  <p>
    {numOne} + {numTwo} = {numOne + numTwo}
  </p>
)

const yearBorn = 1820
const currentYear = new Date().getFullYear()
const age = currentYear - yearBorn
const personAge = (
  <p>
    {' '}
    {autor.firstName} {autor.lastName} is {age} years old.
  </p>
)




const techs = ['HTML','CSS','JavaScript']
const techsformated = techs.map((tech) => <li key={tech}>{tech}</li>)


const user = (
  <div>
    <img src={igorImage} alt="Igor Felipy" width="20%" height="100%" />
  </div>
)

const main = (
  <main>
    <div className='main-wrapper'>
      <p>Prerequisite to get started {' '}
        <strong>
          <em>react.js</em>
          :
        </strong>
      </p>
      <ul>{techsformated}</ul>
      {result}
      {personAge}
      {user}
    </div>
  </main>
)

const copyRight = 'Copyright 2020'
const footer = (
  <footer>
    <div className='footer-wrapper'>
      <p>{copyRight}</p>
    </div>
  </footer>
)


const app = (
  <div>
    {header}
    {main}
    {footer}
  </div>
)



const rootElement = document.getElementById('root')
ReactDOM.render(app, rootElement)