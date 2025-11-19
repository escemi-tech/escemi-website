// External URLs configuration
export const EXTERNAL_URLS = {
	linkedin: 'https://www.linkedin.com/in/emilienescalle/',
	malt: 'https://www.malt.fr/profile/emilienescalle',
	github: 'https://github.com/neilime',
	companyGithub: 'https://github.com/escemi-tech',
	companyLinkedin: 'https://www.linkedin.com/company/escemi',
} as const;

// Project data configuration
export const FEATURED_PROJECTS = [
	{
		name: 'TestUnMetier',
		role: 'CTO Consultant',
		description: 'Technical governance framework improving team visibility and reducing time-to-market by 35%',
		tags: ['CTO', 'Strategy'],
	},
	{
		name: 'Tekkare',
		role: 'Technical Mentor',
		description: 'Reduced feature development time by 40% through optimized GraphQL architecture with NestJS',
		tags: ['GraphQL', 'NestJS'],
	},
	{
		name: 'Atlas des Régions Naturelles',
		role: 'Backend Architect',
		description: 'Architected photo archive platform managing 15,000+ images with <300ms response time',
		tags: ['Architecture', 'Cloud'],
	},
];

// Contact buttons configuration
export const CONTACT_BUTTONS = [
	{ text: 'LinkedIn', url: EXTERNAL_URLS.linkedin, outlined: false },
	{ text: 'Malt', url: EXTERNAL_URLS.malt, outlined: true },
	{ text: 'GitHub', url: EXTERNAL_URLS.github, outlined: true },
];
