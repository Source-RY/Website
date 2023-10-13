import React, { useEffect, useState } from "react";
import { useTranslation } from "react-i18next";
import Tuotteet from "../components/images/tuotteet.jpeg";

const Board = () => {
  const { t } = useTranslation();
  const [products, setProducts] = useState([]);
  useEffect(() => {
    fetch(
      "https://api.kide.app/api/companies/ac0a8d32-9274-4fc6-a6ba-e5dfbf557029"
    )
      .then((response) => response.json())
      .then((data) => {
        setProducts(data?.model?.products || []);
      });
  }, []);

  function centsToPrice(cents) {
    const euros = Math.floor(cents / 100);
    const remainingCents = cents % 100;
    const priceString = `${euros},${remainingCents
      .toString()
      .padStart(2, "0")}`;
    return priceString;
  }

  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={Tuotteet} alt=""></img>
          </div>
          <h1 class="page-title">{t("nav.products")}</h1>
        </div>
        <div class="page-text">
          <br />
          <br />
          <br />
          <div className="products-container">
            {products.map((product) => (
              <div className="product">
                <img
                  className="productImage"
                  src={`https://portalvhdsp62n0yt356llm.blob.core.windows.net/bailataan-mediaitems/${product.mediaFilename}`}
                  alt="Product"
                ></img>
                <h2>{product.name}</h2>
                <p>
                  {product.maxPrice.eur === product.minPrice.eur
                    ? `${centsToPrice(product.maxPrice.eur)}€`
                    : `${centsToPrice(product.minPrice.eur)}€-${centsToPrice(
                        product.maxPrice.eur
                      )}€`}
                </p>
                <a
                  href={`https://kide.app/products/${product.id}`}
                  className="buy-button"
                >
                  Kide.app
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
