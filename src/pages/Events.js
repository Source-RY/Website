import React from "react";
import { useTranslation } from "react-i18next";
import banner from "../components/images/tapahtumat.jpeg";

const Events = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={banner} alt="bannerimage"></img>
          </div>
          <h1 class="page-title">{t("nav.events")}</h1>
        </div>
        <div class="page-text">
          <p>{t("eventsDescription")}</p>
          <p>
            <strong>{t("leisureActivities")}: </strong>
          </p>
          <p>{t("leisureActivitiesExamples")}:</p>
          <ul>
            <li>{t("events.studentParties")}</li>
            <li>{t("events.newbiesNight")}</li>
            <li>{t("events.sportShifts")}</li>
            <li>{t("events.titelan")}</li>
            <li>{t("events.boardGameNights")}</li>
            <li>{t("events.other")}</li>
          </ul>
          <p>
            <strong>{t("companyEvents")}:</strong>
            <br />
            {t("companyEventsDesctiption")}
          </p>
          <ul>
            <li>{t("events.excursions")}</li>
            <li>{t("events.seminars")}</li>
            <li>{t("events.expos")}</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Events;
