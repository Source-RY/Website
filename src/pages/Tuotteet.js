import Tuotteet from "../components/images/tuotteet.jpeg";

const Board = () => {
  return (
    <div>
      <div className="page">
        <div className="page-banner-container">
          <div className="page-banner filter">
            <img className="bannerImage" src={Tuotteet} alt=""></img>
          </div>
          <h1 class="page-title">Tuotteet</h1>
        </div>
        <div class="page-text">
          <br />
          <br />
          <br />
          <div
            className="products-container"
            onClick={() =>
              window.location.assign(
                "https://kide.app/products/165a8a6b-d6a1-4880-ae02-5a088151e467"
              )
            }
          >
            <div className="product">
              <img
                className="productImage"
                src="https://portalvhdsp62n0yt356llm.blob.core.windows.net/bailataan-mediaitems/xl_1742423fb09a75c381e42bf4443e0de8e0454093a8678b6087964344.jpeg"
                alt=""
              ></img>
              <h2>Haalarimerkit</h2>
              <p>2,20 € ... 3,00 €</p>
              <p className="buy-button">Kide.app</p>
            </div>

            <div className="product">
              <img
                className="productImage"
                src="https://portalvhdsp62n0yt356llm.blob.core.windows.net/bailataan-mediaitems/xl_5f044ef6af801b4b653662213720523f2fdd4ab7b5c30c96341f34da.jpeg"
                alt=""
              ></img>
              <h2>Juhlanauha</h2>
              <p>4,00 €</p>
              <p className="buy-button">Kide.app</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Board;
