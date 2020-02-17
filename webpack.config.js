const path = require('path');

module.exports = {
	// Fichier d'entrée :
	entry: './js/main.js',
	// Fichier de sortie :
	output: {
		path: path.resolve(__dirname, './build'),
		filename: 'main.bundle.js',
	},
	// connexion webpack <-> babel :
	module: {
		rules: [
			{
				test: /\.js$/, // tous les fichiers js ...
				exclude: /node_modules/, // ... sauf le dossier node_modules ...
				use: {
					// ... seront compilés par babel !
					loader: 'babel-loader',
				},
			},
		],
	},
	devtool: 'source-map',
};
