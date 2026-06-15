// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';


export default defineConfig({
	site: 'https://elishevameyer-cmd.github.io',
	base: '/starlight',
	integrations: [
		starlight({
			title: 'אלישבע מייער | עוזר עסקי',
			social: [
				{ icon: 'instagram', label: 'Instagram', href: 'https://www.instagram.com/' },
			],
			sidebar: [
				{
					label: 'ראשי',
					items: [
						{ label: 'דשבורד', slug: 'index' },
						{ label: 'עליי', slug: 'about' },
						{ label: 'שירותים', slug: 'services' },
					],
				},
				{
					label: 'מותג',
					items: [
						{ label: 'הנחיות מותג', slug: 'brand/guidelines' },
					],
				},
				{
					label: 'תוכן',
					items: [
						{ label: 'מסגרות עבודה', slug: 'content/frameworks' },
						{ label: 'תבניות מוכנות', slug: 'content/templates' },
					],
				},
				{
					label: 'לקוחות',
					items: [
						{ label: 'קליטת לקוחה', slug: 'clients/onboarding' },
						{ label: 'תבנית אסטרטגיה', slug: 'clients/strategy-template' },
					],
				},
			],
		}),
	],
});
