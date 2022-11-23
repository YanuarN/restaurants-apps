/* eslint-disable no-unused-vars */
import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/App';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
});

const menu = document.querySelector('#hamburgerButton');
const main = document.querySelector('main');
const menuBar = document.querySelector('.menu-bar');

menu.addEventListener('click', (event) => {
  menuBar.classList.toggle('open');
  event.stopPropagation();
});

main.addEventListener('click', () => {
  menuBar.classList.remove('open');
});
