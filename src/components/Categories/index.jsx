import React, { useEffect } from "react";
import Button from "../ui/button";
import "./index.scss";
import { useDispatch, useSelector } from "react-redux";
import { setActiveCategory } from "../../store/slices/menuSlice";

const Categories = () => {
  const dispatch = useDispatch();
  const { categories, activeCategory } = useSelector((state) => state.menu);

  return (
    <div className="categories">
      <Button
        isActive={activeCategory === "All"}
        onClick={() => dispatch(setActiveCategory("All"))}
      >
        All
      </Button>
      {categories &&
        categories.map((category) => (
          <Button
            onClick={() => dispatch(setActiveCategory(category.name[0].value))}
            key={category.id}
            isActive={activeCategory === category.name[0].value}
          >
            {category.name[0].value}
          </Button>
        ))}
    </div>
  );
};

export default Categories;
