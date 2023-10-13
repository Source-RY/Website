import React from "react";
import { useTranslation } from "react-i18next";
import banner from "../components/images/jasenyys.png";

const Membership = () => {
  const { t } = useTranslation();
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={banner} alt=""></img>
          </div>
          <h1 class="page-title">{t("nav.membership")}</h1>
        </div>
        <div class="page-text">
          <p>{t("membershipInfo.paragraph1")}</p>
          <p>
            {t("membershipInfo.paragraph2")}
            <br />– {t("membershipBenefits.events")}
            <br />– {t("membershipBenefits.excursions")}
            <br />– {t("membershipBenefits.coffeTea")}
            <br />– {t("membershipBenefits.sportShifts")}
            <br />– {t("membershipBenefits.discountedEvents")}
          </p>
          <p>{t("membershipInfo.paragraph3")}</p>
          <p>{t("membershipInfo.paragraph4")}</p>
          <p>
            <a href="https://kide.app/memberships/208e706f-aeb4-41cb-86c8-e0243ef90bc5">
              {t("becomeMember")}
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Membership;
