import { IconDefinition, faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { useTranslation } from "gatsby-plugin-react-i18next";

type SocialLink = {
  icon: IconDefinition | string;
  name: string;
  url: string;
  title?: string;
};

export function useSocialLinks(): Array<SocialLink> {
  const { t } = useTranslation();
  return [
    {
      icon: faGithub,
      name: t("Github"),
      url: "https://github.com/escemi-tech",
    },
    {
      icon: faLinkedin,
      name: t("LinkedIn"),
      url: "https://www.linkedin.com/company/escemi",
    },
    {
      icon: "icon-social-malt",
      name: t("Malt"),
      url: "https://www.malt.fr/profile/emilienescalle",
    },
    {
      icon: "icon-social-buildandrun",
      name: t("BuildAndRun"),
      url: "https://www.build-and-run.fr/",
      title: t("Member of BuildAndRun"),
    },
  ];
}
