import React, { useState } from "react";
import SectionTitle from "../SectionTitle";
import "./index.scss";
import ProductCard from "../ProductCard";

const MenuGrid = ({ sectionTitle, items }) => {
  return (
    <section className="menu-grid-section">
      <SectionTitle title={sectionTitle} />
      <div className="menu-products">
        {items &&
          items.map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
      </div>
    </section>
  );
};

export default MenuGrid;
