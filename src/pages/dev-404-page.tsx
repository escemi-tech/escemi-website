import { graphql } from "gatsby";
import { Link, useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement } from "react";

import Layout from "../components/layout/Layout";

const PageNotFound = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <Layout>
      <header className="masthead d-flex">
        <div className="container text-center my-auto">
          <h1 className="mb-1">{t("404 - Page not found")}</h1>
          <h3 className="mb-5">
            <em>{t("The page you request does not exist")}</em>
          </h3>

          <Link className="btn btn-primary btn-xl" to="/">
            {t("Back to the home page")}
          </Link>
        </div>
        <div className="overlay"></div>
      </header>
    </Layout>
  );
};

export default PageNotFound;

export const query = graphql`
  query($language: String!) {
    locales: allLocale(filter: { language: { eq: $language } }) {
      edges {
        node {
          ns
          data
          language
        }
      }
    }
  }
`;
