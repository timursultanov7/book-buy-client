import React from "react";
import ErrorBoundary from "../components/ErrorBoundary";

import { LayoutImage } from "../components/LayoutImage";
import { BestSellers } from "../components/BestSellers";
import { Categories } from "../components/Categories";

export const Home = () => {
  return (
    <div>
      <ErrorBoundary>
        <LayoutImage />
      </ErrorBoundary>
      <ErrorBoundary>
        <BestSellers />
      </ErrorBoundary>
      <ErrorBoundary>
        <Categories />
      </ErrorBoundary>
    </div>
  );
};
