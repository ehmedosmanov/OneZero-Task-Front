import React from "react";
import Categories from "../Categories";
import SectionTitle from "../SectionTitle";

const MenuSection = () => {
  return (
    <section className="menu-section">
      <SectionTitle title="Menu" />
      <Categories />
    </section>
  );
};

export default MenuSection;
