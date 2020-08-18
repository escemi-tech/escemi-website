import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Footer from '../components/Footer';
import Header from '../components/Header';
import ScrollToTop from '../components/ScrollToTop';

import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.jpeg';
import p1 from '../assets/images/portfolio-1.jpg';
import p2 from '../assets/images/portfolio-2.jpg';
import p3 from '../assets/images/portfolio-3.jpg';
import p4 from '../assets/images/portfolio-4.jpg';

const IndexPage = () => (
  <Layout>
    <Header />

    <header className="masthead d-flex">
      <div className="container text-center my-auto">
        <h1 className="mb-3">
          <img className="img-fluid" src={logo} alt={config.heading} />
        </h1>
        <h3 className="mb-5">
          <em>{config.subHeading}</em>
        </h3>
        <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-primary btn-xl" href="#about">
            À propos
          </a>
        </Scroll>
      </div>
      <div className="overlay"></div>
    </header>

    <section className="content-section bg-light" id="about">
      <div className="container text-center">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2>À propos</h2>
            <img
              className="rounded-circle float-left mr-4"
              src={avatar}
              alt="Profil"
            />
            <p className="lead mb-5 text-left">
              Propulsé par une expertise forte de 12 ans dans le domaine du
              digital, mon parcours professionnel s'est perfectionné sur les
              thèmes de l'architecture en Systèmes d'Information, la gestion de
              projet et le management d'équipes IT. Ces expériences sont
              apportées au sein la société ESCEMI et permettent de mettre au
              service de vos projets, des compétences techniques et
              relationnelles, avec un sens de la rigueur et du travail bien
              fait.
            </p>
            <Scroll type="id" element="services" offset={100}>
              <a className="btn btn-dark btn-xl" href="#services">
                Services & missions
              </a>
            </Scroll>
          </div>
        </div>
      </div>
    </section>

    <section
      className="content-section bg-primary text-white text-center"
      id="services"
    >
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-5">Services & missions</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-directions"></i>
            </span>
            <h4>
              <strong>CTO</strong>
            </h4>
            <p className="text-faded mb-0">Looks great on any screen size!</p>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-organization"></i>
            </span>
            <h4>
              <strong>Architecte</strong>
            </h4>
            <p className="text-faded mb-0">
              Freshly redesigned for Bootstrap 4.
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-people"></i>
            </span>
            <h4>
              <strong>Lead developper</strong>
            </h4>
            <p className="text-faded mb-0">
              Millions of users
              <i className="fas fa-heart"></i>
            </p>
          </div>
        </div>
      </div>
    </section>

    <section id="contact" className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5 text-white">
          Un besoin, une mission : contactez-nous !
        </h2>
        <div className="row align-items-center">
          <form
            action={`https://formspree.io/`}
            name="contact"
            method="POST"
            data-netlify="true"
            className="offset-sm-1 col-sm-8"
          >
            <div className="form-group row">
              <label
                htmlFor="name"
                className="col-sm-4 col-form-label col-form-label-lg text-white "
              >
                Nom
              </label>
              <div className="col-sm-8">
                <input
                  type="text"
                  name="name"
                  className="form-control form-control-lg"
                  required
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="email"
                className="col-sm-4 col-form-label col-form-label-lg text-white "
              >
                Email
              </label>
              <div className="col-sm-8">
                <input
                  name="email"
                  type="email"
                  className="form-control form-control-lg"
                />
              </div>
            </div>
            <div className="form-group row">
              <label
                htmlFor="message"
                className="col-sm-4 col-form-label col-form-label-lg text-white "
              >
                Message
              </label>
              <div className="col-sm-8">
                <textarea
                  name="message"
                  className="form-control form-control-lg"
                  required
                ></textarea>
              </div>
            </div>
            <div className="form-group row">
              <div className="offset-sm-4 col-sm-8 text-left">
                <button type="submit" className="btn btn-primary">
                  Envoyer
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>

    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Projets récents</h2>
        </div>
        <div className="row no-gutters">
          <div className="col-lg-6">
            <a className="portfolio-item" href="https://www.archive-arn.fr/">
              <span className="caption">
                <span className="caption-content">
                  <h2>Atlas des Régions Naturelles</h2>
                  <h3>
                    Projet d'archive photographique du territoire français
                  </h3>
                  <p className="mb-0">
                    ✓ Architecture serverless: Amplify, Cloudfront, Aurora
                    Serverless
                    <br />
                    ✓ CI/CD : Github Action
                    <br />
                    ✓ Developpement backend : AWS Lambda / Typescript / GraphQL
                    <br />
                    ✓ Developpement backoffice : React / Typescript
                    <br />
                  </p>
                </span>
              </span>
              <img
                className="img-fluid"
                src={p1}
                alt="Aperçu Atlas des Régions Naturelles"
              />
            </a>
          </div>
          <div className="col-lg-6">
            <a
              className="portfolio-item"
              href="https://spotishakr.netlify.app/"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>Spotishakr</h2>
                  <h3>Générateur de playlist Spotify</h3>
                  <p className="mb-0">
                    ✓ Architecture JAMSTACK: Netlify
                    <br />
                    ✓ Developpement Backend : Typescript / Netlify function
                    <br />✓ Developpement frontend : React / Typescript
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p2} alt="Aperçu Spotishakr" />
            </a>
          </div>
          <div className="col-lg-6">
            <a
              className="portfolio-item"
              href="https://neilime.github.io/twbs-helper-module/"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>TwbsHelper</h2>
                  <h3>
                    Laminas (formerly Zend Framework) module for easy
                    integration of the Twitter Bootstrap v4.
                  </h3>
                  <p className="mb-0">
                    ✓ Developpement: PHP
                    <br />✓ Documentation : Docusaurus / auto-generated docs
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p3} alt="Aperçu TwbsHelper" />
            </a>
          </div>
          <div className="col-lg-6">
            <a
              className="portfolio-item"
              href="https://master.d2esspr3nj3mny.amplifyapp.com/"
            >
              <span className="caption">
                <span className="caption-content">
                  <h2>My Easy School</h2>
                  <h3>Plateforme SAAS de gestion de classes</h3>
                  <p className="mb-0">
                    ✓ Architecture serverless: Amplify, DynamoDB
                    <br />
                    ✓ CI/CD : AWS Code Build
                    <br />
                    ✓ Developpement backend : AWS Lambda / Typescript / GraphQL
                    <br />
                    ✓ Developpement backoffice : React / Typescript
                    <br />
                  </p>
                </span>
              </span>
              <img className="img-fluid" src={p4} alt="Aperçu My Easy School" />
            </a>
          </div>
        </div>
      </div>
    </section>

    <section className="content-section bg-primary text-white">
      <div className="container text-center">
        <h2 className="mb-4">Nous contribuons à l'univers Open source</h2>

        <div className="row">
          <div className="col-sm-6">
            <ul className="list-unstyled">
              <li>
                <a
                  href="https://github.com/neilime?tab=repositories"
                  className="text-white"
                >
                  Contributions Github
                </a>
              </li>
              <li>
                <a
                  href="https://archiveprogram.github.com/"
                  className="text-white"
                >
                  Contributeur au programme "Arctic Code Vault"
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-6">
            <a
              target="_blank"
              rel="noopener noreferrer"
              href="https://github.com/neilime"
            >
              <img
                align="center"
                src="https://github-readme-stats.vercel.app/api?username=neilime&amp;show_icons=true"
                alt="Statistiques github"
                style={{ maxWidth: '100%' }}
              />
            </a>
          </div>
        </div>
      </div>
    </section>

    <ScrollToTop />
    <Footer />
  </Layout>
);

export default IndexPage;
