import React from "react";
import Container from "../../elements/Container";
import Header from "./Header";

export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen'>
      <Container>
        <Header />
      </Container>
    </div>
  );
}
