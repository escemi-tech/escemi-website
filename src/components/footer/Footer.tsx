import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement } from "react";

import { useSocialLinks } from "../config/useSocialLinks";
import Scroll from "../scroll/Scroll";
import SocialIcon from "../social-icon/SocialIcon";

export default function Footer(): ReactElement {
  const { originalPath } = useI18next();
  const { t } = useTranslation();
  const socialLinks = useSocialLinks();

  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row justify-content-center">
          {socialLinks.map((social) => {
            const { icon, name, url, title } = social;
            return (
              <div key={name} className="col-3">
                <a
                  href={url}
                  className="social-link rounded-circle text-white"
                  title={title?.length ? title : name}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <SocialIcon icon={icon} />
                </a>
              </div>
            );
          })}
        </div>
        <div className="row justify-content-md-center footer-internal-links">
          <div className="col ">
            <p className="text-muted small mt-5">
              &copy; {new Date().getFullYear()} {t("Copyright")} -{" "}
              <a href="https://www.escemi.com/">{t("ESCEMI")}</a>
              <Link to={originalPath} language="fr">
                {t("French")}
              </Link>
              |
              <Link to={originalPath} language={"en"}>
                {t("English")}
              </Link>{" "}
              -{" "}
              <Scroll type="class" element="page-top">
                <a href="#page-top">{t("Home")}</a>
              </Scroll>
              |
              <Scroll type="id" element="about">
                <a href="#about">{t("About us")}</a>
              </Scroll>
              |
              <Scroll type="id" element="services">
                <a href="#services">{t("Services & missions")}</a>
              </Scroll>
              |
              <Scroll type="id" element="contact">
                <a href="#contact">{t("Contact")}</a>
              </Scroll>
              |
              <Scroll type="id" element="portfolio">
                <a href="#portfolio">{t("Portfolio")}</a>
              </Scroll>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
