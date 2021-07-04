import "./styles.css";

import ProductImg from "assets/images/car-card.png";
import ButtonIconBuy from "components/ButtonIconBuy";

const ProductCard = () => {
  return (
    <>
      <div className="base-card card-product-container">
        <div className="card-top-container">
          <div className="card-product-container-icon">
            <img src={ProductImg} alt="Nome do produto" />
          </div>
          <div className="card-product-content">
            <div>
              <h6>Audi Supra TT</h6>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                Cupiditate, nisi
              </p>
            </div>
          </div>
        </div>
        <ButtonIconBuy />
      </div>
    </>
  );
};

export default ProductCard;
