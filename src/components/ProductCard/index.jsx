import React, { memo } from "react";
import ProductImage from "../../assets/1920x1080-desserts-background-yy0fl0mv9g4o2g1v.jpg";
import { useDispatch } from "react-redux";
import { openProductModal } from "../../store/slices/menuSlice";
import "./index.scss";

const ProductCard = ({ product }) => {
  const { priceSell, name } = product;
  const dispatch = useDispatch();
  return (
    <div
      className="product-item"
      onClick={() => dispatch(openProductModal(product))}
    >
      <div className="product-heading">
        <img src={ProductImage} alt="Text" />
        <span className="product-price">₼ {priceSell}</span>
      </div>
      <div className="product-text">
        <p>{name[0].value}</p>
      </div>
    </div>
  );
};

export default memo(ProductCard);
