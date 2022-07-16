const example =
  () => `Sensible webpack 5 boilerplate using Babel and PostCSS with a hot dev server 
  and an optimized production build.`
// Test import of an asset
import webpackLogo from '@/assets/images/webpack-logo.svg'
import examplePNG from '@/assets/images/example.png'
// Test import of styles
import '@/assets/styles/index.scss'

// Appending to the DOM
const logo = document.createElement('img')
logo.src = webpackLogo

const heading = document.createElement('h1')
heading.textContent = example()

// Test a background image url in CSS
const imageBackground = document.createElement('div')
imageBackground.classList.add('image')

// Test a public folder asset
const imagePublic = document.createElement('img')
imagePublic.src = examplePNG

const app = document.querySelector('#app')
window.onload = ()=>{
  app.append(logo, heading, imageBackground, imagePublic)
}
console.log(app)

export default app