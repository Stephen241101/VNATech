/** @format */

import type { Config } from 'tailwindcss';

const scale_list = Array.from(Array(300).keys(), (v, k) =>
	parseFloat((0.1 + k / 10).toFixed(1))
);
const safelist = [
	...scale_list.map((v) => `scale-x-[${v}]`),
	...scale_list.map((v) => `scale-y-[${v}]`),
];
const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	safelist: safelist,
	theme: {
		extend: {
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic':
					'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
		},
	},
	plugins: [],
};
export default config;
