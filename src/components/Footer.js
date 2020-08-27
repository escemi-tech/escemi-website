import React from 'react';
import config from '../../config';

export default function Footer() {
  return (
    <footer className="footer text-center">
      <div className="container">
        <ul className="list-inline mb-5">
          {config.socialLinks.map((social) => {
            const { icon, name, url, title } = social;
            return (
              <li key={name} className="list-inline-item">
                <a
                  href={url}
                  className="social-link rounded-circle text-white mr-3"
                  title={title?.length ? title : name}
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  <i className={icon}></i>
                </a>
              </li>
            );
          })}
        </ul>
        <p className="text-muted small mb-0">
          &copy; {new Date().getFullYear()} Copyright -{' '}
          <a href="https://www.escemi.com/">ESCEMI</a>
        </p>
      </div>
    </footer>
  );
}
