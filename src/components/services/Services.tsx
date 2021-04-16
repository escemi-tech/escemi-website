import { faMapSigns, faSitemap, faUsers } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement } from "react";

const Services = (): ReactElement => {
  const { t } = useTranslation();
  return (
    <section className="content-section bg-primary text-white text-center" id="services">
      <div className="container">
        <div className="content-section-heading">
          <h3 className="text-secondary mb-5">{t("Services & missions")}</h3>
        </div>
        <div className="row">
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <FontAwesomeIcon icon={faMapSigns} />
            </span>
            <h4 className="text-secondary text-bold">{t("CTO at your service")}</h4>
            <p className="text-white mb-0">
              ✓ {t("Digital transformation")}
              <br />✓ {t("Mentoring of startups")}
              <br />✓ {t("IT Audit & Organization to achieve operational efficiency")}
              <br />✓ {t("Hiring & development of technical teams")}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-lg-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <FontAwesomeIcon icon={faSitemap} />
              <i className="icon-organization"></i>
            </span>
            <h4 className="text-secondary text-bold">{t("Web / Cloud architecte")}</h4>
            <p className="text-white mb-0">
              ✓{" "}
              {t(
                "Architecture of your project to have a secure, modern, agile, high-performance technical solution that is consistent with your vision"
              )}
              <br />✓ {t("Definition of standards and ensuring consistency of implementation")}
              <br />✓ {t("Description of good practices and checking their application")}
              <br />✓{" "}
              {t("Implementation of P.O.C. in order to test and validate a new technical solution")}
              <br />✓ {t("Providing technical expertise and support to technical teams")}
            </p>
          </div>
          <div className="col-lg-4 col-md-6 mb-5 mb-md-0">
            <span className="service-icon rounded-circle mx-auto mb-3">
              <FontAwesomeIcon icon={faUsers} />
            </span>
            <h4 className="text-secondary text-bold">{t("Lead developer Nodejs / PHP")}</h4>
            <p className="text-white mb-0">
              ✓ {t("Support of a technical team for the success of the project")}
              <br />✓{" "}
              {t(
                "Bridge and guarantee of the good communication between the actors of the project"
              )}
              <br />✓ {t("Ensures code quality and best practices (craftmanship)")}
              <br />✓ {t("Technical watch and continuous improvement proposal")}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
