import { graphql, useStaticQuery } from "gatsby";
import { FileNode } from "gatsby-plugin-image/dist/src/components/hooks";
import { useTranslation } from "gatsby-plugin-react-i18next";

export type PortfolioItem = {
  title: string;
  subtitle: string;
  url: string;
  imageFile: FileNode;
  content: string[];
};

export function usePortfolioItems(): Array<PortfolioItem> {
  const { t } = useTranslation();
  const files = useStaticQuery(
    graphql`
      {
        allFile(filter: { extension: { eq: "jpg" } }) {
          nodes {
            relativePath
            childImageSharp {
              gatsbyImageData(
                width: 636
                height: 378
                placeholder: BLURRED
                formats: [AUTO, WEBP, AVIF]
              )
            }
          }
        }
      }
    `
  );

  const getImage = (image: string) => {
    const imageFile = files?.allFile.nodes.find(
      (file: FileNode) => file.relativePath === `portfolio/${image}`
    );
    if (!imageFile) {
      throw new Error(`Unable to fiund image file for image "${image}"`);
    }
    return imageFile;
  };

  return [
    {
      title: t("Atlas of Natural Regions"),
      subtitle: t("Project of photographic archive of the French territory"),
      url: "https://www.archive-arn.fr",
      imageFile: getImage("portfolio-1.jpg"),
      content: [
        t("Serverless architecture: Amplify, Cloudfront, Aurora Serverless"),
        t("CI/CD: Github Action"),
        t("Backend development: AWS Lambda / Typescript / GraphQL"),
        t("Backoffice development: React / Typescript"),
      ],
    },
    {
      title: t("Spotishakr"),
      subtitle: t("Spotify Playlist Generator"),
      url: "https://spotishakr.netlify.app",
      imageFile: getImage("portfolio-2.jpg"),
      content: [
        t("JAMSTACK architecture: Netlify"),
        t("Backend development: Typescript / Netlify function"),
        t("Frontend development: React / Typescript"),
      ],
    },
    {
      title: t("TwbsHelper"),
      subtitle: t(
        "Laminas (formerly Zend Framework) module for easy integration of the Twitter Bootstrap v4"
      ),
      url: "https://neilime.github.io/twbs-helper-module",
      imageFile: getImage("portfolio-3.jpg"),
      content: [t("Development: PHP"), t("Documentation: Docusaurus / auto-generated docs")],
    },
    {
      title: t("MyEasySchool"),
      subtitle: t("SAAS platform for classroom management"),
      url: "https://master.d2esspr3nj3mny.amplifyapp.com",
      imageFile: getImage("portfolio-4.jpg"),
      content: [
        t("Serverless architecture: Amplify, DynamoDB"),
        t("CI/CD: AWS Code Build"),
        t("Backend development: AWS Lambda / Typescript / GraphQL"),
        t("Frontend development: React / Typescript"),
      ],
    },
  ];
}
