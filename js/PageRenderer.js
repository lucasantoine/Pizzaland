export default class PageRenderer {
	static titleElement;
	static contentElement;

	static renderPage(page) {
		if (this.titleElement) {
			this.titleElement.innerHTML = page.renderTitle();
		}
		if (this.contentElement) {
			this.contentElement.innerHTML = page.render();
		}
	}
}
