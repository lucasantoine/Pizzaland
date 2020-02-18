#### TP4 - AJAX - jQuery <!-- omit in toc -->
# C. POST une pizza <!-- omit in toc -->

**Maintenant que l'on arrive à charger des données depuis l'API REST tentons à l'inverse d'envoyer des données au serveur !**

Dans la méthode `submit` (méthode déclenchée à la soumission du formulaire) de la classe `AddPizzaPage`, appelez le webservice `POST` sur `/api/v1/pizzas` afin d'ajouter une nouvelle pizza **avec les informations saisies par l'utilisateur** (uniquement si aucune erreur de saisie n'est détectée !).

La technique à utiliser pour envoyer les données au serveur dépendent de la façon dont est codé le webservice. Ici, le webservice s'attend à recevoir une requête dont le `"Content-Type"` est `"application/json"`. Il faut donc envoyer à fetch une chaîne de caractères encodée en en JSON grâce à [`JSON.stringify`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) :

```js
fetch(
	'http://localhost:8080/api/v1/pizzas',
	{
		method:'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(pizza)
	}
);
```

Le webservice `POST` `/api/v1/pizzas` s'attend à recevoir en paramètre une chaîne JSON de la forme suivante (*les données doivent être remplacées par celles saisies par l'utilisateur dans le formulaire*) :
```json
{
	"nom":"Savoyarde",
	"base":"crème",
	"image": "https://images.unsplash.com/photo-1566843971939-1fe9e277a0c0?fit=crop&w=500&h=300",
	"prix_petite": 8,
	"prix_grande": 10.5,
	"ingredients": [7, 8, 9, 12]
}
```
On notera que les prix sont exprimés en nombre et pas en chaînes de caractères et que les ingrédients sont un tableau contenant les ids des ingrédients à associer à la pizza.

Si l'envoi s'est bien passé, le webservice retourne en entête un status `201 Created` et dans le corps de la réponse le JSON correspondant à la pizza créée :

<a href="images/readme/ajax-post-201.jpg"><img src="images/readme/ajax-post-201.jpg" width="80%"></a>

<a href="images/readme/ajax-post-response.jpg"><img src="images/readme/ajax-post-response.jpg" width="80%"></a>

Si tout s'est bien passé, vous pouvez recharger la page et constater que la pizza que vous avez saisie dans le formulaire s'est ajoutée en bas de la liste sur la HomePage :

<a href="images/readme/ajax-post-resultat-liste.jpg"><img src="images/readme/ajax-post-resultat-liste.jpg" width="80%"></a>