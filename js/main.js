import data from './data.js';
import HomePage from './pages/HomePage.js';
import PageRenderer from './PageRenderer.js';

// Initialisation du PageRenderer
PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');

// Affichage de la HomePage
const homePage = new HomePage(data);
PageRenderer.renderPage(homePage); // affiche la liste des pizzas
//
// On aurait aussi pu faire ceci :
//
// const homePage = new HomePage([]);
// homePage.pizzas = data;
// PageRenderer.renderPage(homePage); // affiche la liste des pizzas
