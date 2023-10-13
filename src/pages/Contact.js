import React from "react";
import { useTranslation } from "react-i18next";
import banner from "../components/images/yhteystiedot.jpeg";
import map from "../components/images/kerhohuone.png";

const Contact = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={banner} alt=""></img>
          </div>
          <h1 class="page-title">{t("contactInformation")}</h1>
        </div>
        <div class="page-text">
          <p>
            {t("email")}: hallitus(at)source.club
            <br />
            {t("address")}: Kuntokatu 3, 33520 Tampere
            <br />
            {t("footerInfo.address1")}
          </p>
          <p>{t("footerInfo.address2")}</p>
          <img className="mapImage" src={map} alt=""></img>
        </div>
        <h1 className="partners-title">{t("harassmentContact")}</h1>
        <div className="page-text">
          <p>{t("harassmentInfo.paragraph1")}</p>
          <p>{t("harassmentInfo.paragraph2")}</p>
          <p>
            {t("harassmentInfo.paragraph3")}:{" "}
            <a href="mailto:jasen@source.club">jasen@source.club</a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
