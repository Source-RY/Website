import React from "react";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";

const Missing404 = () => {
  const { t } = useTranslation();
  return (
    <div className="page-text">
      <h1 class="not-found">{t("pageNotFound")}</h1>
      <p class="not-found">
        {t("pageNotFoundExplanation")}
        <br />
        <br />
        <Link to="/">{t("backToMain")}</Link>
      </p>
    </div>
  );
};

export default Missing404;
