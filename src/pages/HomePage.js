import React from "react";
import { Router } from "react-router-dom";
import HeroTop from "../components/marketing/pageSections/HeroTop";
import LastProducts from "../components/marketing/pageSections/LastProducts";
import Reinsurance from "../components/marketing/pageSections/Reinsurance";
import Events from "../components/marketing/pageSections/Events";

export default function HomePage() {
  return (
    <>
      <HeroTop />
      <LastProducts />
      <Reinsurance />
      <Events />
    </>
  );
}
