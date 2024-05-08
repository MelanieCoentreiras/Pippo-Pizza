import React from "react";
import Container from "../../elements/Container";
import Header from "./Header";
import HeroImage from "../../../medias/images/heroTop/pippo-pizza-miam.png";
import Button from "../../elements/Button";

export default function HeroTop() {
  return (
    <div className='bg-primary w-full h-screen'>
      <Container>
        <Header />
        <div className='w-full flex items-center py-10 px-10'>
          <div className='w-full'>
            <h1 className='text-secondary text-2xl mb-8'>
              Une expérience culinaire exceptionnelle, livrée directement à
              votre porte !
            </h1>
            <h2 className='font-title text-action text-9xl'>Pippo Pizza</h2>
            <Button className={"bg-action hover:bg-actionHover text-beige"}>
              Créer un compte
            </Button>
          </div>
          <div className='w-full justify-end'>
            <img
              src={HeroImage}
              alt='Ma jolie Pippo Pizza'
              className='mr-3 mb-2'
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
