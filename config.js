module.exports = {
  siteTitle: 'ESCEMI', // <title>
  manifestName: 'ESCEMI - Corporate website',
  manifestShortName: 'ESCEMI', // max 12 characters
  manifestStartUrl: '/',
  manifestBackgroundColor: '#1c3144',
  manifestThemeColor: '#1c3144',
  manifestDisplay: 'standalone',
  manifestIcon: 'src/assets/img/website-icon.png',
  pathPrefix: `/`, // This path is subpath of your hosting https://domain/portfolio
  heading: 'ESCEMI',
  subHeading:
    'A votre service pour vous accompagner et relever les défis de vos projets digitaux',
  portfolio: [
    {
      title: 'Atlas des Régions Naturelles',
      subtitle: "Projet d'archive photographique du territoire français",
      url: 'https://www.archive-arn.fr',
      image: 'portfolio-1.jpg',
      content: [
        'Architecture serverless: Amplify, Cloudfront, Aurora Serverless',
        'CI/CD : Github Action',
        'Développement backend : AWS Lambda / Typescript / GraphQL',
        'Développement backoffice : React / Typescript',
      ],
    },
    {
      title: 'Spotishakr',
      subtitle: 'Générateur de playlist Spotify',
      url: 'https://spotishakr.netlify.app',
      image: 'portfolio-2.jpg',
      content: [
        'Architecture JAMSTACK: Netlify',
        'Developpement Backend : Typescript / Netlify function',
        'Développement frontend : React / Typescript',
      ],
    },
    {
      title: 'TwbsHelper',
      subtitle:
        'Laminas (formerly Zend Framework) module for easy integration of the Twitter Bootstrap v4.',
      url: 'https://neilime.github.io/twbs-helper-module',
      image: 'portfolio-3.jpg',
      content: [
        'Développement: PHP',
        'Documentation : Docusaurus / auto-generated docs',
      ],
    },
    {
      title: 'My Easy School',
      subtitle: 'Plateforme SAAS de gestion de classes',
      url: 'https://master.d2esspr3nj3mny.amplifyapp.com',
      image: 'portfolio-4.jpg',
      content: [
        'Architecture serverless: Amplify, DynamoDB',
        'CI/CD : AWS Code Build',
        'Développement backend : AWS Lambda / Typescript / GraphQL',
        'Developpement frontend : React / Typescript',
      ],
    },
  ],
  // social
  socialLinks: [
    {
      icon: 'icon-social-github',
      name: 'Github',
      url: 'https://github.com/escemi',
    },
    {
      icon: 'icon-social-linkedin',
      name: 'Linkedin',
      url: 'https://www.linkedin.com/company/escemi',
    },
    {
      icon: 'icon-social-malt',
      name: 'Malt',
      url: 'https://www.malt.fr/profile/emilienescalle',
    },
    {
      icon: 'icon-social-buildandrun',
      name: 'BuildAndRun',
      url: 'https://www.build-and-run.fr/',
      title: 'Membre de BuildAndRun',
    },
  ],
  contactForm:
    'https://send.pageclip.co/34lOq1sIPupZSsVzENW1iopL4hyuqP0M/contact-form',
};
