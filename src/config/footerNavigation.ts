// Footer Navigation
// ------------
// Description: The footer navigation data for the website.
export interface Logo {
	src: string
	alt: string
	text: string
}

export interface FooterAbout {
	title: string
	aboutText: string
	logo: Logo
}

export interface SubCategory {
	subCategory: string
	subCategoryLink: string
}

export interface FooterColumn {
	category: string
	subCategories: SubCategory[]
}

export interface SubFooter {
	copywriteText: string
}

export interface FooterData {
	footerAbout: FooterAbout
	footerColumns: FooterColumn[]
	subFooter: SubFooter
}

export const footerNavigationData: FooterData = {
	footerAbout: {
		title: 'FOSSIA',
		aboutText:
			'Information on FOSSIA for getting in touch with the community and knowing more about our initiatives.',
		logo: {
			src: '/logo.png',
			alt: 'Logo of FOSSIA',
			text: 'FOSSIA'
		}
	},
	footerColumns: [
		{
			category: 'Resources',
			subCategories: [
				{
					subCategory: 'Projects',
					subCategoryLink: '/projects'
				},
				{
					subCategory: 'FAQ',
					subCategoryLink: '/resources/faq'
				},
				{
					subCategory: 'Code of Conduct',
					subCategoryLink: '/resources/code-of-conduct'
				},
			]
		},
		{
			category: 'About',
			subCategories: [
				{
					subCategory: 'Team',
					subCategoryLink: '/about/team'
				},
				{
					subCategory: 'Blog',
					subCategoryLink: '/blog'
				}
			]
		},
		{
			category: 'Get in touch',
			subCategories: [
				{
					subCategory: 'Get Involved',
					subCategoryLink: '/resources/get-involved'
				},
				{
					subCategory: 'Matrix',
					subCategoryLink: 'https://matrix.to/#/#fossiaorg:matrix.org'
				},
				{
					subCategory: 'GitHub',
					subCategoryLink: 'https://github.com/fossiaorg'
				},
				{
					subCategory: 'LinkedIn',
					subCategoryLink: 'https://linkedin.com/company/fossiaorg'
				},
				{
					subCategory: 'Mastodon',
					subCategoryLink: 'https://mas.to/@fossiaorg'
				},
				{
					subCategory: 'Instagram',
					subCategoryLink: 'https://instagram.com/fossiaorg'
				},
				{
					subCategory: 'YouTube',
					subCategoryLink: 'https://youtube.com/@fossiaorg'
				},
				{
					subCategory: 'Contact',
					subCategoryLink: 'mailto:fossia@riseup.net'
				}
			]
		}
	],
	subFooter: {
		copywriteText: 'This website is licensed under GNU AGPLv3 License.'
	}
}
