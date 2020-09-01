import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <div className="row justify-content-center">
          {config.socialLinks.map((social) => {
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
                  <i className={icon}></i>
                </a>
              </div>
            );
          })}
        </div>
        <div className="row">
          <div className="col">
            <p className="text-muted small mt-5">
              &copy; {new Date().getFullYear()} Copyright -{' '}
              <a href="https://www.escemi.com/">ESCEMI</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
  );
}
