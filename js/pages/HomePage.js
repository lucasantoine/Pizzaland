import Page from './Page.js';
import PizzaThumbnail from '../components/PizzaThumbnail.js';

export default class HomePage extends Page {
	#pizzas;

	constructor(pizzas) {
		super('La carte');
		this.pizzas = pizzas;
	}

	set pizzas(value) {
		this.#pizzas = value;
		this.children = this.#pizzas.map(pizza => new PizzaThumbnail(pizza));
	}
}
