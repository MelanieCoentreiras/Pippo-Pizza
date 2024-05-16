import React from "react";
import { Router } from "react-router-dom";
import HeroTop from "../components/marketing/pageSections/HeroTop";
import LastProducts from "../components/marketing/pageSections/LastProducts";

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <LastProducts />
    </>
  );
}
