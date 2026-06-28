import './style.css'
import { createHomepage } from './home.js'
import { createContactPage } from './contact.js'
import { createMenuPage } from './menu.js'

console.log('Hi')

createHomepage()

const main = document.querySelector('#content')

const nav = document.querySelector('nav')
nav.addEventListener('click', (e) => {
  switch (e.target.id) {
    case 'about-btn':
      main.replaceChildren()
      createContactPage()
      break;
    case 'home-btn':
      main.replaceChildren()
      createHomepage()
      break;
    case 'menu-btn':
      main.replaceChildren()
      createMenuPage()
      break;
    default:
      break;
  }
})

