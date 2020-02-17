import Component from './Component.js';
import Img from './Img.js';

export default class PizzaThumbnail extends Component {
	constructor({ nom, image, prix_petite, prix_grande }) {
		super('article', { name: 'class', value: 'media' }, [
			new Component('a', { name: 'href', value: image }, [
				new Img(image),
				new Component('section', { name: 'class', value: 'infos' }, [
					new Component('h4', null, nom),
					new Component('ul', null, [
						new Component(
							'li',
							null,
							`Prix petit format : ${prix_petite.toFixed(2)} €`
						),
						new Component(
							'li',
							null,
							`Prix grand format : ${prix_grande.toFixed(2)} €`
						),
					]),
				]),
			]),
		]);
	}
}
