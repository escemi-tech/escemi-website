import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement } from "react";

import { useContactFormUrl } from "../config/useContactFormUrl";

const ContactForm = (): ReactElement => {
  const { t } = useTranslation();
  const contactFormUrl = useContactFormUrl();
  return (
    <form
      action={contactFormUrl}
      name="contact"
      method="POST"
      data-netlify="true"
      className="offset-sm-1 col-sm-8"
    >
      <div className="form-group row">
        <label htmlFor="name" className="col-sm-4 col-form-label col-form-label-lg text-secondary">
          {t("Nom")}
        </label>
        <div className="col-sm-8">
          <input
            type="text"
            id="name"
            name="name"
            className="form-control form-control-lg"
            required
          />
        </div>
      </div>
      <div className="form-group row">
        <label htmlFor="email" className="col-sm-4 col-form-label col-form-label-lg text-secondary">
          {t("Email")}
        </label>
        <div className="col-sm-8">
          <input id="email" name="email" type="email" className="form-control form-control-lg" />
        </div>
      </div>
      <div className="form-group row">
        <label
          htmlFor="message"
          className="col-sm-4 col-form-label col-form-label-lg text-secondary"
        >
          {t("Message")}
        </label>
        <div className="col-sm-8">
          <textarea
            id="message"
            name="message"
            className="form-control form-control-lg"
            required
          ></textarea>
        </div>
      </div>
      <div className="form-group row">
        <div className="offset-sm-4 col-sm-8 text-left">
          <button type="submit" className="btn btn-lg btn-secondary">
            {t("Send")}
          </button>
        </div>
      </div>
    </form>
  );
};

const Contact = (): ReactElement => {
  const { t } = useTranslation();

  return (
    <section id="contact" className="callout">
      <div className="container text-center">
        <h2 className="mx-auto mb-5 text-white">{t("A project, a mission: contact us!")}</h2>
        <div className="row align-items-center">
          <ContactForm />
        </div>
      </div>
    </section>
  );
};

export default Contact;
