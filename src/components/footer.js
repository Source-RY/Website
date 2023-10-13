import React from "react";
import Image from "./images/source-small-text.png";
import { useTranslation } from "react-i18next";

const Footer = () => {
  const { t } = useTranslation();
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="footer-item">
          <p>hallitus@source.club</p>
          <p>Kuntokatu 3</p>
          <p>33520</p>
          <p>Tampere</p>
        </div>
        <div className="footer-item">
          <p>{t("footerInfo.address1")}</p>
          <p>{t("footerInfo.address2")}</p>
        </div>
      </div>
      <img src={Image} alt=""></img>
    </div>
  );
};

export default Footer;
