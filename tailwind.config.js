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
				serif: ['Playfair Display', ...defaultTheme.fontFamily.serif],
			},
		},
	},
	variants: {},
	plugins: [
		function ({ addBase }) {
			addBase([
				{
					'@font-face': {
						fontFamily: 'Playfair Display',
						fontWeight: '100 900',
						fontStyle: 'normal',
						fontNamedInstance: 'Regular',
						fontDisplay: 'swap',
						src:
							'url("/fonts/PlayfairDisplay-VariableFontwght.woff2") format("woff2")',
					},
				},
			]);
		},
	],
};
