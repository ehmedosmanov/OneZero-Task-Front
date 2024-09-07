import React, { useEffect } from "react";
import ProductImage from "../../assets/1920x1080-desserts-background-yy0fl0mv9g4o2g1v.jpg";
import { FiMinus, FiPlus } from "react-icons/fi";
import "./index.scss";
import { useDispatch } from "react-redux";
import { closeProductModal } from "../../store/slices/menuSlice";

const ProductDetail = ({ product }) => {
  const dispatch = useDispatch();

  useEffect(() => {
    if (product) {
      document.body.classList.add("no-scroll");
    } else {
      document.body.classList.remove("no-scroll");
    }
    return () => {
      document.body.classList.remove("no-scroll");
    };
  }, [product]);

  const handleClickOutside = (event) => {
    if (event.target.classList.contains("modal-wrapper")) {
      dispatch(closeProductModal());
    }
  };
  return (
    <div onClick={handleClickOutside} className={`modal-wrapper`}>
      <div className="modal-card">
        <div className="product-image">
          <img src={ProductImage} alt={product.name[0].value} />
        </div>
        <div className="product-content">
          <div className="product-heading">
            <h3>{product.name[0].value}</h3>
            <span className="product-category">Fast food</span>
            <span className="product-price">₼ {product.priceSell}</span>
          </div>
          <div className="product-controls">
            <button className="control-btn">
              <FiMinus />
            </button>
            <span className="product-quantity">1</span>
            <button className="control-btn">
              <FiPlus />
            </button>
          </div>
          <span className="line"></span>
          <div className="product-details">
            <ul>
              <li>Calories: {product.calories}</li>
              <li>Nuts: Hazelnut, 2 x Almond, Macadamia </li>
              <li>Syrups: Vanilla, Honey</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
