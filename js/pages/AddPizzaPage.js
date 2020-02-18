import Page from './Page.js';

export default class AddPizzaPage extends Page {
	constructor() {
		super('Ajouter une pizza');
		this.submit = this.submit.bind(this);
	}

	render() {
		return /*html*/ `
			<form class="addPizzaPage">
			<label>
				Nom :
				<input type="text" name="nom" class="form-control">
			</label>
			<label>
				Base :
				<select name="base" class="form-control">
					<option>Tomate</option>
					<option>Crème</option>
				</select>
			</label>
			<label>
				Image :
				<input type="text" name="image" class="form-control" placeholder="https://...">
			</label>
			<label>
				Prix petit format :
				<input type="number" name="prix_petite" class="form-control" step="0.05">
			</label>
			<label>
				Prix grand format :
				<input type="number" name="prix_grande" class="form-control" step="0.05">
			</label>
			<label>
				Ingrédients :
				<select name="ingredients" multiple="true" class="form-control">
					<option value="1">Mozzarella</option>
					<option value="2">Jambon</option>
					<option value="3">Champignon</option>
					<option value="4">Olives</option>
				</select>
			</label>
			<button type="submit" class="btn btn-default">Ajouter</button>
		</form>`;
	}

	mount(element) {
		element.querySelector('form').addEventListener('submit', this.submit);
	}

	submit(event) {
		event.preventDefault();
		const fieldNames = [
				'nom',
				'base',
				'image',
				'prix_petite',
				'prix_grande',
				'ingredients',
			],
			values = {},
			errors = [];

		// pour chaque champ, on vérifie s'il est rempli ou non
		// et on construit l'objet values et le tableau errors
		fieldNames.forEach(fieldName => {
			const value = this.getFieldValue(fieldName);
			if (value == '' || value == []) {
				errors.push(`Le champ ${fieldName} ne peut être vide !`);
			}
			values[fieldName] = value;
		});

		if (errors.length) {
			// si des erreurs sont détectées, on les affiche
			alert(errors.join('\n'));
		} else {
			// si il n'y a pas d'erreur on envoie les données
			const pizza = {
				nom: values.nom,
				base: values.base[0],
				prix_petite: Number(values.prix_petite),
				prix_grande: Number(values.prix_grande),
				ingredients: values.ingredients,
			};
			alert(`La pizza ${values.nom} a été ajoutée !`);
		}
	}

	getFieldValue(fieldName) {
		// on récupère le champ qui a pour attribut `name`
		// la valeur fieldName (nom, base, prix_petite, etc.)
		const field = document.querySelector(`[name=${fieldName}]`);
		if (field instanceof HTMLInputElement) {
			// s'il s'agit d'un <input> on utilise la propriété `value`
			// et on retourne la chaine de caractère saisie
			return field.value;
		} else if (field instanceof HTMLSelectElement) {
			// s'il s'agit d'un <select> on utilise la propriété `selectedOptions`
			// et on retourne un tableau avec les valeurs sélectionnées
			// NB: On utilise Array.from pour convertir selectedOptions en tableau
			// @see https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Global_Objects/Array/from
			return Array.from(field.selectedOptions, option => option.value);
		}
		return null;
	}
}
