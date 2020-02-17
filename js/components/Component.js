export default class Component {
	tag;
	attribute;
	children;

	constructor(tag, attribute, children) {
		this.tag = tag;
		this.attribute = attribute;
		this.children = children;
	}

	render() {
		let html = `<${this.tag} ${this.renderAttributes()}`;
		if (this.children) {
			html += `>${this.renderChildren()}</${this.tag}>`;
		} else {
			html += ' />';
		}
		return html;
	}

	renderAttributes() {
		if (this.attribute) {
			return `${this.attribute.name}="${this.attribute.value}"`;
		}
		return '';
	}

	renderChildren() {
		if (this.children instanceof Array) {
			return this.children.reduce(
				(html, child) =>
					html + (child instanceof Component ? child.render() : child),
				''
			);
		}
		return this.children || '';
	}
}
