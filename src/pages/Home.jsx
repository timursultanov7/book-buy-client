import React from "react";

import { LayoutImage } from "../components/LayoutImage";
import { BestSellers } from "../components/BestSellers";
import { Categories } from "../components/Categories";

export const Home = () => {
  return (
    <div>
      <LayoutImage />

      <BestSellers />

      <Categories />
    </div>
  );
};
