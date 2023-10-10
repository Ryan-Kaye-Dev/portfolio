import './style.css'
import logo from './img/logo.png'
import hero from './img/heroimg.svg'

const logoContainer = document.getElementById('logo-container');
const myLogo = new Image();
myLogo.src = logo;
myLogo.id = 'logo';
logoContainer.append(myLogo);

const heroBox = document.getElementById('introduction');
const heroImg = new Image();
heroImg.src = hero;
heroImg.id = 'hero-img';
introduction.append(heroImg);