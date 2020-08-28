import React, { Component } from 'react';
import config from '../../config';

const SkillItem = ({ label, items }) => {
  return (
    <div className="col-lg-3">
      <h3 className="text-secondary">{label}</h3>
      <ul className="list-unstyled">
        {items.map((item) => (
          <li>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default class Skills extends Component {
  render() {
    return (
      <div className="row">
        {config.skills.map((skill) => (
          <SkillItem key={skill.label} {...skill} />
        ))}
      </div>
    );
  }
}
