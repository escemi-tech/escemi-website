import React, { Component, Fragment } from 'react';
import { useStaticQuery, graphql } from 'gatsby';
import config from '../../config';

const PortfolioItem = ({ title, subtitle, url, image, content }) => {
  const files = useStaticQuery(
    graphql`
      {
        allFile(filter: { extension: { eq: "jpg" } }) {
          nodes {
            relativePath
            publicURL
          }
        }
      }
    `
  );

  console.log();

  const imageSrc = files.allFile.nodes.find(
    (file) => file.relativePath === image
  )?.publicURL;

  return (
    <div className="col-lg-6 portfolio-container">
      <h2>{title}</h2>
      <h3>{subtitle}</h3>
      <a
        className="portfolio-item"
        href={url}
        rel="noopener noreferrer nofollow"
        target="_blank"
      >
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
        <img className="img-fluid" src={imageSrc} alt={title} />
      </a>
    </div>
  );
};

export default class Portfolio extends Component {
  render() {
    return (
      <div className="row">
        {config.portfolio.map((item) => (
          <PortfolioItem key={item.url} {...item} />
        ))}
      </div>
    );
  }
}
