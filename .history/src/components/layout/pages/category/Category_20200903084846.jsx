import React from "react";
import CatNav from "./categorynav/CatNav";
import "./Category.css";

const Category = () => {
  return (
    <div>
      <CatNav />
      <h2 className="title">Category</h2>
    </div>
  );
};

export default Category;
