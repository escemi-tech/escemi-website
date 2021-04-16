import { faBars, faTimes } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Link, useI18next, useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement, useState } from "react";

import Scroll from "../scroll/Scroll";

const Nav = (): ReactElement => {
  const { t } = useTranslation();
  const { originalPath, language } = useI18next();
  const [openMenu, setOpenMenu] = useState(false);

  const toggleMenu = () => setOpenMenu((openMenu) => !openMenu);

  return (
    <>
      <a
        onClick={() => toggleMenu()}
        className={`menu-toggle rounded ${openMenu ? "active" : ""}`}
        title="Toggle menu"
      >
        <FontAwesomeIcon icon={openMenu ? faTimes : faBars} />
      </a>
      <nav id="sidebar-wrapper" className={` ${openMenu ? "active" : ""}`}>
        <ul className="sidebar-nav">
          <li className="sidebar-brand">
            <a href="#page-top">{t("ESCEMI")}</a>
          </li>
          <li className="sidebar-nav-item">
            <Link to={originalPath} language={language === "en" ? "fr" : "en"}>
              {language === "en" ? t("French") : t("English")}
            </Link>
          </li>
          <li>
            <hr />
          </li>
          <li className="sidebar-nav-item">
            <Scroll onClick={() => toggleMenu()} type="class" element="page-top">
              <a href="#page-top">{t("Home")}</a>
            </Scroll>
          </li>
          <li className="sidebar-nav-item">
            <Scroll onClick={() => toggleMenu()} type="id" element="about">
              <a href="#about">{t("About us")}</a>
            </Scroll>
          </li>
          <li className="sidebar-nav-item">
            <Scroll onClick={() => toggleMenu()} type="id" element="services">
              <a href="#services">{t("Services & missions")}</a>
            </Scroll>
          </li>
          <li className="sidebar-nav-item">
            <Scroll onClick={() => toggleMenu()} type="id" element="contact">
              <a href="#contact">{t("Contact")}</a>
            </Scroll>
          </li>
          <li className="sidebar-nav-item">
            <Scroll onClick={() => toggleMenu()} type="id" element="portfolio">
              <a href="#portfolio">{t("Portfolio")}</a>
            </Scroll>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
