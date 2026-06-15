// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Docs',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			locales: {
				root: {
					label: 'English',
					lang: 'en',
				},
				he: {
					label: 'עברית',
					lang: 'he',
					dir: 'rtl',
				},
			},
			sidebar: [
				{
					label: 'Guides',
					translations: { he: 'מדריכים' },
					items: [
						{
							label: 'Example Guide',
							translations: { he: 'מדריך לדוגמה' },
							slug: 'guides/example',
						},
					],
				},
				{
					label: 'Reference',
					translations: { he: 'עיון' },
					autogenerate: { directory: 'reference' },
				},
			],
		}),
	],
});
