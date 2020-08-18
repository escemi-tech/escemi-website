import React from 'react';

import Layout from '../components/Layout';
import Header from '../components/Header';
import { Link } from 'gatsby';

const PageNotFound = () => (
  <Layout>
    <Header />
    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-1">404 - Page non trouvée</h1>
        <h3 className="mb-5">
          <em>La page que vous demandez n'existe pas</em>
        </h3>

        <Link className="btn btn-primary btn-xl" to="/">
          Retour à la page d'accueil
        </Link>
      </div>
      <div className="overlay"></div>
    </header>
  </Layout>
);

export default PageNotFound;
