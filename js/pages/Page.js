import Component from '../components/Component';

export default class Page extends Component {
	title = '';

	constructor(title, children) {
		super('section', null, children);
		this.title = title;
	}

	renderTitle() {
		return `<h1>${this.title}</h1>`;
	}

	mount(element) {
		// par défaut, cette méthode ne fait rien
		// ce sont les classes filles qui devront surcharger cette méthode
	}
}
