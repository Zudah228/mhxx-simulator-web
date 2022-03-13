const colors = {
	transparent: 'transparent',
	black: '#222732',
	white: '#fff',
	primary: '#294A95',
	background: '#E0ECF8',
	divider: '#96A7AF'
};

module.exports = {
	content: ['./src/**/*.{html,js,svelte,ts}'],
	colors: colors,
	theme: {
		textColors: (theme) => theme('colors'),
		ringColor: (theme) => ({
			DEFAULT: theme('colors.blue.500', '#BDBDBD'),
			...theme('colors')
		}),
		backgroundColor: (theme) => theme('colors'),
		extend: {
			colors: colors
		}
	},
	plugins: []
};
