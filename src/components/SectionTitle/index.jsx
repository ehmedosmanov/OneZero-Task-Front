import React, { memo } from "react";
import "./index.scss";
const SectionTitle = ({ title }) => {
  return (
    <div className="section-title">
      <h2>{title}</h2>
    </div>
  );
};

export default memo(SectionTitle);
