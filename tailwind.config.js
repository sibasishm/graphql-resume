const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	purge: ['./pages/*.tsx'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultTheme.fontFamily.sans],
			},
		},
	},
	variants: {},
	plugins: [],
};
