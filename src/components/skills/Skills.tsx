import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement } from "react";

import { SkillItem, useSkillItems } from "./useSkillItems";

const SkillItemRender = ({ label, items }: SkillItem) => {
  return (
    <div className="col-lg-3">
      <h3 className="text-secondary">{label}</h3>
      <ul className="list-unstyled">
        {items.map((item, index) => (
          <li key={`skill-item-${label}-${index}`}>✓ {item}</li>
        ))}
      </ul>
    </div>
  );
};

const Skills = (): ReactElement => {
  const skillItems = useSkillItems();
  const { t } = useTranslation();
  return (
    <>
      <h2 className="text-center mb-5">{t("Skills")}</h2>
      <div className="row">
        {skillItems.map((skill) => (
          <SkillItemRender key={skill.label} {...skill} />
        ))}
      </div>
    </>
  );
};

export default Skills;
