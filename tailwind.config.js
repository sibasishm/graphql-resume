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
				sans: ['Epilouge', ...defaultTheme.fontFamily.sans],
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
				{
					'@font-face': {
						fontFamily: 'Epilogue',
						fontWeight: '100 900',
						fontStyle: 'normal',
						fontNamedInstance: 'Regular',
						fontDisplay: 'swap',
						src:
							'url("/fonts/Epilogue-VariableFont_wght.ttf") format("truetype")',
					},
				},
				{
					'@font-face': {
						fontFamily: 'Epilogue',
						fontWeight: '100 900',
						fontStyle: 'italic',
						fontNamedInstance: 'Italic',
						fontDisplay: 'swap',
						src:
							'url("/fonts/Epilogue-Italic-VariableFontwght.woff2") format("woff2")',
					},
				},
			]);
		},
	],
};
