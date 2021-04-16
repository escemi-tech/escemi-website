import "../../assets/sass/index.scss";

import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { PropsWithChildren, ReactElement } from "react";
import { Helmet } from "react-helmet";

import Nav from "../nav/Nav";

const SEO = () => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const title = t("ESCEMI");
  const description = t(
    "At your service to support you and meet the challenges of your digital projects"
  );
  return (
    <Helmet title={title} defer={false} htmlAttributes={{ lang: language }}>
      <meta charSet="utf-8" />
      <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      <meta name="description" content={description} />
      <meta name="og:description" content={description} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta
        name="keywords"
        content={t(
          "Freelance, CTO at your service, Web / Cloud architect, Lead developer Nodejs / PHP"
        )}
      />
    </Helmet>
  );
};

export const Layout = ({ children }: PropsWithChildren<unknown>): ReactElement => {
  return (
    <>
      <SEO />
      <div className="page-top">
        <Nav />
        {children}
      </div>
    </>
  );
};

export default Layout;
