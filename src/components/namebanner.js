import React from "react";
import { useTranslation } from "react-i18next";
import Image from "./images/namebanner.png";
import en from "./images/en.png";
import fi from "./images/fi.png";

const Namebanner = () => {
  const { t, i18n } = useTranslation();
  return (
    <div className="namebanner">
      <img src={Image} alt="Namebanner" id="namebanner-image" />
      {i18n.language === "fi" ? (
        <div
          className="nav-link"
          style={{
            flexDirection: "row",
            marginLeft: 5,
          }}
          onClick={() => i18n.changeLanguage("en")}
        >
          <p>EN</p>
          <img
            src={en}
            alt="UK flag"
            style={{ alignSelf: "center", marginLeft: 5 }}
          />
        </div>
      ) : (
        <div
          className="nav-link"
          style={{
            flexDirection: "row",
            marginLeft: 5,
          }}
          onClick={() => i18n.changeLanguage("fi")}
        >
          <p>FI</p>
          <img
            src={fi}
            alt="Finnish flag"
            style={{ alignSelf: "center", marginLeft: 5 }}
          />
        </div>
      )}
    </div>
  );
};

export default Namebanner;
