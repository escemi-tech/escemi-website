import { graphql } from "gatsby";
import React, { ReactElement } from "react";

import About from "../components/about/About";
import Contact from "../components/contact/Contact";
import Footer from "../components/footer/Footer";
import Layout from "../components/layout/Layout";
import Masthead from "../components/masthead/Masthead";
import OpenSource from "../components/open-source/OpenSource";
import Portfolio from "../components/portfolio/Portfolio";
import ScrollToTop from "../components/scroll-to-top/ScrollToTop";
import Services from "../components/services/Services";

export default function IndexPage(): ReactElement {
  return (
    <Layout>
      <Masthead />
      <About />
      <Services />
      <Contact />
      <Portfolio />
      <OpenSource />
      <ScrollToTop />
      <Footer />
    </Layout>
  );
}

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
