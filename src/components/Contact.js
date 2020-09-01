import React, { Component } from 'react';
import config from '../../config';

export default class Contact extends Component {
  render() {
    return (
      <form
        action={config.contactForm}
        name="contact"
        method="POST"
        data-netlify="true"
        className="offset-sm-1 col-sm-8"
      >
        <div className="form-group row">
          <label
            htmlFor="name"
            className="col-sm-4 col-form-label col-form-label-lg text-secondary"
          >
            Nom
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
          <label
            htmlFor="email"
            className="col-sm-4 col-form-label col-form-label-lg text-secondary"
          >
            Email
          </label>
          <div className="col-sm-8">
            <input
              id="email"
              name="email"
              type="email"
              className="form-control form-control-lg"
            />
          </div>
        </div>
        <div className="form-group row">
          <label
            htmlFor="message"
            className="col-sm-4 col-form-label col-form-label-lg text-secondary"
          >
            Message
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
              Envoyer
            </button>
          </div>
        </div>
      </form>
    );
  }
}
