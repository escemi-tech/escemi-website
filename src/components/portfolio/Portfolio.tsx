import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { Fragment, ReactElement } from "react";

import { PortfolioItem, usePortfolioItems } from "./usePortfolioItems";

const PortfolioItemRender = ({ title, subtitle, url, imageFile, content }: PortfolioItem) => {
  const imageData = getImage(imageFile);

  if (!imageData) {
    throw new Error(`Unable to find image file for image "${imageFile.id}"`);
  }
  return (
    <div className="col-lg-6 portfolio-container">
      <h2>{title}</h2>
      <h3 className="mb-3">{subtitle}</h3>
      <a className="portfolio-item" href={url} rel="noopener noreferrer nofollow" target="_blank">
        <span className="caption">
          <span className="caption-content">
            <p className="mb-0">
              {content.map((line, index) => (
                <Fragment key={`${url}-${index}`}>
                  ✓ {line}
                  <br />
                </Fragment>
              ))}
            </p>
          </span>
        </span>
        <GatsbyImage className="img-fluid" image={imageData} alt={title} />
      </a>
    </div>
  );
};

const Portfolio = (): ReactElement => {
  const portfolioItems = usePortfolioItems();
  const { t } = useTranslation();

  return (
    <section className="content-section" id="portfolio">
      <div className="container">
        <div className="content-section-heading text-center">
          <h3 className="text-secondary mb-3">{t("Portfolio")}</h3>
          <h2 className="mb-5">{t("Latest projects")}</h2>
        </div>
        <div className="row">
          {portfolioItems.map((item) => (
            <PortfolioItemRender key={item.url} {...item} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
