import React from "react";
import { useTranslation } from "react-i18next";
import banner from "../components/images/ehdotukset.jpeg";

const Suggestions = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={banner} alt=""></img>
          </div>
          <h1 class="page-title">{t("nav.suggestions")}</h1>
        </div>
        <div class="page-text">
          <p>
            {t("clubRoomSuggestions.paragraph1")}
            <br />
            {t("clubRoomSuggestions.paragraph2")}
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeZar30P-LmcHjYnlOaebpS9G-TGrS1_KnHtUEghFOH8CImSg/viewform">
              {t("clubRoomAquisitions")}
            </a>
          </p>
          <p>
            {t("companySuggestions.paragraph1")}
            <br />
            {t("companySuggestions.paragraph2")}
            <br />
            {t("companySuggestions.paragraph3")}
            <br />
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSeehQrOdczRqpODpw1exrf1baUp_zMfOgdS6tNDz0r04z02tA/viewform">
              {t("excursionSuggestions")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
