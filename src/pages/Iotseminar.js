import React from "react";
import { useTranslation } from "react-i18next";
import banner from "../components/images/iotseminaari/logo_white_2020.png";

const Iotseminar = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-text">
          <div className="page-title-image">
            <img src={banner} alt=""></img>
          </div>
          <br />
          <p>
            {t("iotseminarInfo.paragraph1")}
            <br />
            <br />
            {t("iotseminarInfo.paragraph1")}
            <br />
          </p>
          <br />
          <br />
        </div>
      </div>
    </div>
  );
};

export default Iotseminar;
