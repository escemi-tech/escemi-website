import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const SocialIcon = ({ icon }) => {
  const isFontAwesomeIcon = typeof icon === 'object';
  return isFontAwesomeIcon ? (
    <FontAwesomeIcon icon={icon} />
  ) : (
    <i className={icon}></i>
  );
};

export default SocialIcon;
