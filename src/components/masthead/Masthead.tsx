import { StaticImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement } from "react";

import Scroll from "../scroll/Scroll";

const Masthead = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <header className="masthead d-flex">
      <div className="container text-center">
        <h1 className="mb-3">
          <StaticImage
            src="../../assets/img/website-icon.png"
            alt={t("Logo ESCEMI")}
            placeholder="blurred"
            width={240}
            height={240}
            aspectRatio={1}
          />
        </h1>
        <h2 className="mb-5">
          <em>
            {t("At your service to support you and meet the challenges of your digital projects")}
          </em>
        </h2>
        <Scroll type="id" element="about" offset={100}>
          <a className="btn btn-primary btn-xl" href="#about">
            {t("About us")}
          </a>
        </Scroll>
      </div>
      <div className="overlay"></div>
    </header>
  );
};

export default Masthead;
