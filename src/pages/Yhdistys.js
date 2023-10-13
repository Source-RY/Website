import React from "react";
import { useTranslation } from "react-i18next";
import sourcebanner from "../components/images/sourcebanner.jpeg";

const Titelan = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img
              className="bannerImage"
              src={sourcebanner}
              alt="Source banenr"
            ></img>
          </div>
          <h1 class="page-title">{t("nav.association")}</h1>
        </div>
        <div class="page-text">
          <p>{t("associationInfo.paragraph1")}</p>
          <p>{t("associationInfo.paragraph2")}</p>
          <p>{t("associationInfo.paragraph3")}</p>
          <p>{t("associationInfo.paragraph4")}</p>
        </div>
      </div>
    </div>
  );
};

export default Titelan;
