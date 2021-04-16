import { useTranslation } from "gatsby-plugin-react-i18next";
import React, { ReactElement } from "react";

const OpenSource = (): ReactElement => {
  const {
    t,
    i18n: { language },
  } = useTranslation();

  const githubStatsUrl = new URL("https://github-readme-stats.vercel.app/api");
  githubStatsUrl.searchParams.append("username", "neilime");
  githubStatsUrl.searchParams.append("show_icons", "true");
  githubStatsUrl.searchParams.append("locale", language);
  githubStatsUrl.searchParams.append("title_color", "ecb807");
  githubStatsUrl.searchParams.append("icon_color", "ecb807");
  githubStatsUrl.searchParams.append("text_color", "ffffff");
  githubStatsUrl.searchParams.append("hide_border", "true");
  githubStatsUrl.searchParams.append("bg_color", "1c3144");
  githubStatsUrl.searchParams.append("border_radius", "0");
  githubStatsUrl.searchParams.append("line_height", "30");
  githubStatsUrl.searchParams.append("include_all_commits", "true");

  return (
    <section className="content-section bg-primary text-white">
      <div className="container">
        <h2 className="mb-4">{t("We contribute to the open source scene")}</h2>

        <div className="row">
          <div className="col-sm-5">
            <ul className="list-unstyled text-center">
              <li>
                <a
                  href="https://github.com/neilime?tab=repositories"
                  className="btn btn-link btn-lg text-white"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  ✓ {t("Github contributions")}
                </a>
              </li>
              <li>
                <a
                  href="https://archiveprogram.github.com/"
                  className="btn btn-link btn-lg text-white"
                  rel="noopener noreferrer nofollow"
                  target="_blank"
                >
                  ✓ {t('Contributor to the "Arctic Code Vault" program')}
                </a>
              </li>
            </ul>
          </div>
          <div className="col-sm-7">
            <a target="_blank" rel="noopener noreferrer" href="https://github.com/neilime">
              <img
                src={githubStatsUrl.toString()}
                alt={t("Github statistics")}
                className="img-fluid"
              />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OpenSource;
