import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faMapSigns,
  faSitemap,
  faUsers,
} from '@fortawesome/free-solid-svg-icons';

export default class Contact extends Component {
  render() {
    return (
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-5">Services & missions</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <FontAwesomeIcon icon={faMapSigns} />
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
              <FontAwesomeIcon icon={faSitemap} />
              <i className="icon-organization"></i>
            </span>
            <h4 className="text-secondary text-bold">Architecte Web / Cloud</h4>
            <p className="text-white mb-0">
              ✓ Architecture de votre projet pour avoir une solution technique
              sécurisée, moderne, agile, performante et surtout en accord avec
              votre vision
              <br />✓ Définition des standards et veille à la cohérence des
              réalisations
              <br />✓ Description des bonnes pratiques et contrôle de leurs
              application
              <br />✓ Mise en place de P.O.C. dans le but de tester et prouver
              une nouvelle solution technique
              <br />✓ Apport d'une expertise technique et support des équipes
              technique
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <FontAwesomeIcon icon={faUsers} />
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
    );
  }
}
