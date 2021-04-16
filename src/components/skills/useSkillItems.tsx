import { useTranslation } from 'gatsby-plugin-react-i18next';

export type SkillItem = {
  label: string;
  items: string[];
};

export function useSkillItems(): SkillItem[] {
  const { t } = useTranslation();
  return [
    {
      label: t('Methodologies'),
      items: [t('Scrum'), t('TDD'), t('Kanban'), t('Kaizen'), t('UML')],
    },
    {
      label: t('Architecture / Lead development'),
      items: [
        t('Craftmanship'),
        t('Developer Experience'),
        t('Architecture decision record'),
      ],
    },
    {
      label: t('Cloud'),
      items: [t('Cloud developer'), t('Serverless'), t('Amazon Web Services')],
    },
    {
      label: t('Frameworks'),
      items: ['React.js', 'Angular', 'NestJS', 'Laminas / Zend'],
    },
    {
      label: t('Testing'),
      items: [t('Jest'), t('Cypress'), t('PHPUnit')],
    },
    {
      label: t('Languages'),
      items: ['Typescript / JavaScript', 'PHP'],
    },
    {
      label: t('Databases'),
      items: [
        t('Mysql'),
        t('MongoDB'),
        t('PostgreSQL'),
        t('SQL Server'),
        t('Elasticsearch'),
      ],
    },
    {
      label: t('Continuous integration'),
      items: [t('Jenkins'), t('Gitlab CI'), t('Github Actions')],
    },
    {
      label: t('Platforms'),
      items: [t('Linux'), t('Node.js')],
    },
    {
      label: t('Version control'),
      items: [t('GitHub'), t('Gitlab'), t('Git')],
    },
  ];
}
