import { IconProp } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { ReactElement } from "react";

type SocialIconProps = {
  icon: string | IconProp;
};

function isFontAwesomeIcon(icon: string | IconProp): icon is IconProp {
  return typeof icon === "object";
}

const SocialIcon = ({ icon }: SocialIconProps): ReactElement => {
  return isFontAwesomeIcon(icon) ? <FontAwesomeIcon icon={icon} /> : <i className={icon}></i>;
};

export default SocialIcon;
