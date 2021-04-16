import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement } from "react";

import { useSocialLinks } from "../config/useSocialLinks";
import Scroll from "../scroll/Scroll";
import Skills from "../skills/Skills";
import SocialIcon from "../social-icon/SocialIcon";

const About = (): ReactElement => {
  const { t } = useTranslation();
  const socialLinks = useSocialLinks();

  return (
    <section className="content-section bg-light" id="about">
      <div className="container">
        <div className="row">
          <div className="col-lg-10 mx-auto">
            <h2 className="text-center">{t("About us")}</h2>
            <div className="row">
              <div className="col-sm-3 text-center">
                <StaticImage
                  className="rounded-circle"
                  src="../../assets/img/avatar.jpg"
                  alt={t("Profile")}
                  width={200}
                  height={210}
                />
              </div>

              <div className="col-sm-9 lead text-justify">
                {t(
                  "Driven by a 12-years expertise in the digital field, my professional career has been refined on the themes of Information Systems architecture, project management and IT team management."
                )}
                <br />
                <br />
                {t(
                  "The whole of these experiences are found within the ESCEMI company which will be at the service of your projects, to bring you technical and relational competences, with a sense of the rigour and the work well made."
                )}
              </div>
            </div>
            <div className="row mt-5 lead">
              {socialLinks.map((social) => {
                const { icon, name, url, title } = social;

                return (
                  <div key={`about-social-${name}`} className="col-sm-3">
                    <a
                      href={url}
                      title={title?.length ? title : name}
                      className="social-link d-block"
                      rel="noopener noreferrer nofollow"
                      target="_blank"
                    >
                      ✓ <SocialIcon icon={icon} /> {name}
                    </a>
                  </div>
                );
              })}
            </div>
            <hr className="mb-5" />
            <Skills />
            <hr className="mb-5" />
            <p></p>
            <div className="text-center">
              <Scroll type="id" element="services" offset={100}>
                <a className="btn btn-primary btn-xl" href="#services">
                  {t("Services & missions")}
                </a>
              </Scroll>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
