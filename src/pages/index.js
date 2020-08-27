import React from 'react';

import Layout from '../components/Layout';
import Scroll from '../components/Scroll';

import config from '../../config';
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Portfolio from '../components/Portfolio';
import ScrollToTop from '../components/ScrollToTop';

import logo from '../assets/images/logo.png';
import avatar from '../assets/images/avatar.jpeg';
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
            <div class="row">
              <div className="col-sm-3">
                <img className="rounded-circle " src={avatar} alt="Profil" />
              </div>

              <div className="col-sm-9 lead mb-5 text-left">
                Propulsé par une expertise forte de 12 ans dans le domaine du
                digital, mon parcours professionnel s'est perfectionné sur les
                thèmes de l'architecture en Systèmes d'Information, la gestion
                de projet et le management d'équipes IT. Ces expériences sont
                apportées au sein la société ESCEMI et permettent de mettre au
                service de vos projets, des compétences techniques et
                relationnelles, avec un sens de la rigueur et du travail bien
                fait.
                <hr />
                <ul class="list-inline">
                  {config.socialLinks.map((social) => {
                    const { icon, name, url, title } = social;
                    return (
                      <li key={name} class="list-inline-item">
                        ✓{' '}
                        <a href={url} title={title?.length ? title : name}>
                          <i className={icon}></i> {name}
                        </a>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </div>

            <p className=""></p>
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
            <h4 className="text-secondary text-bold">CTO à votre service</h4>
            <p className="text-white mb-0">
              ✓ Transformation digitale
              <br />✓ Accompagnement de startup
              <br />✓ Audit & Organisation SI pour viser l'excellence
              opérationnelle
              <br />✓ Recrutement & évolution des équipes techniques
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-organization"></i>
            </span>
            <h4 className="text-secondary text-bold">Architecte Web / Cloud</h4>
            <p className="text-white mb-0">
              ✓ Architecture de votre projet pour avoir une solution technique
              sécurisée, moderne, agile, performante et surtout en accord avec
              votre vision
              <br />✓ Définition des standards et veille à la cohérence des
              réalisations. Description des bonnes pratiques et contrôle de
              leurs application
              <br />✓ Mise en place de P.O.C. dans le but de tester et prouver
              une nouvelle solution technique
              <br />✓ Apport d'une expertise technique et support des équipes
              technique
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <i className="icon-people"></i>
            </span>
            <h4 className="text-secondary text-bold">
              Lead developper Nodejs / PHP
            </h4>
            <p className="text-white mb-0">
              ✓ Accompagnement d'une équipe technique autour pour la réussite du
              projet
              <br />✓ Intermédiaire et garant de la bonne communication entre
              les acteurs du projet
              <br />✓ Assure la qualité du code et des bonnes pratiques
              (craftmanship)
              <br />✓ Veille et proposition d'amélioration continue
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
          <Contact />
        </div>
      </div>
    </section>

    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-0">Portfolio</h3>
          <h2 className="mb-5">Projets récents</h2>
        </div>
        <Portfolio />
      </div>
    </section>

    <section className="content-section bg-primary text-white">
      <div className="container ">
        <h2 className="mb-4">Nous contribuons à l'univers Open source</h2>

        <div className="row">
          <div className="col-sm-6">
            <ul className="list-unstyled">
              <li>
                ✓
                <a
                  href="https://github.com/neilime?tab=repositories"
                  className="text-white"
                >
                  Contributions Github
                </a>
              </li>
              <li>
                ✓
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
