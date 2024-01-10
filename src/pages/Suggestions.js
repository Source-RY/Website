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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSfRnbc_QdeW2hCQDD0MHOcnVTOOso85Yncfl6YjNKxKBCQkFg/viewform">
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
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSephvgvm1_gzXikuVaRpI3uOIoNCJphDLcTjo30YPSImFiZ0g/viewform">
              {t("excursionSuggestions")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Suggestions;
