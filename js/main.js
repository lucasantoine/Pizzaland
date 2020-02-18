import data from './data.js';
import HomePage from './pages/HomePage.js';
import AddPizzaPage from './pages/AddPizzaPage.js';
import PageRenderer from './PageRenderer.js';

// Initialisation du PageRenderer
PageRenderer.titleElement = document.querySelector('.pageTitle');
PageRenderer.contentElement = document.querySelector('.pizzasContainer');

const homePage = new HomePage(data);
PageRenderer.renderPage(homePage); // affiche la liste des pizzas
const addPizzaPage = new AddPizzaPage();

// A.3.1. innerHTML
document.querySelector(
	'.navbar-brand'
).innerHTML += `<small class="label label-success">les pizzas c'est la vie</small>`;

// B.2. La gestion du menu
document
	.querySelector('.pizzaListButton')
	.parentElement.classList.add('active');

// Gestion du click sur les liens du menu
function handleNavClick(event) {
	event.preventDefault();

	const link = event.currentTarget,
		li = link.parentElement,
		prevActiveLi = document.querySelector('.navbar-right li.active');

	prevActiveLi?.setAttribute('class', '');
	// NB : l'opérateur ?. permet de simplifier l'écriture d'appel conditionnels
	// c'est l'équivalent de :
	// if (prevActiveLi) {
	// 	prevActiveLi.setAttribute('class', '');
	// }
	li.setAttribute('class', 'active');
}
const navLinks = document.querySelectorAll('.navbar-right a');
navLinks.forEach(link => link.addEventListener('click', handleNavClick));

// B.3. Navigation en JS
const newsContainer = document.querySelector('.newsContainer'),
	closeButton = newsContainer.querySelector('.closeButton');
newsContainer.style.display = 'initial';
// équivalent de :  newsContainer.setAttribute('style', 'display:initial');
function handleCloseClick(event) {
	event.preventDefault();
	newsContainer.style.display = 'none';
}
closeButton.addEventListener('click', handleCloseClick);

// C.3. Le formulaire d'ajout de pizza
document.querySelector('.pizzaListButton').addEventListener('click', event => {
	event.preventDefault();
	PageRenderer.renderPage(homePage);
});
document.querySelector('.pizzaFormButton').addEventListener('click', event => {
	event.preventDefault();
	PageRenderer.renderPage(addPizzaPage);
});
