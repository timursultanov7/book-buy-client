import React, { useRef } from "react";

import { LayoutImage } from "../components/LayoutImage";
import { BestSellers } from "../components/BestSellers";
import { Categories } from "../components/Categories";
import { FeaturedIn } from "../components/FeaturedIn";

export const Home = () => {
  return (
    <div>
      <LayoutImage />
      <FeaturedIn />
      <BestSellers />

      <Categories />
    </div>
  );
};
