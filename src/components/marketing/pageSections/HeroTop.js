import React from "react";
import Container from "../../elements/Container";
import Header from "./Header";
import HeroImage from "../../../medias/images/heroTop/pippo-pizza-miam.png";
import Button from "../../elements/Button";

export default function HeroTop() {
  return (
    <div className='bg-primary w-full'>
      <Container>
        <Header />
        <div className='relative w-full py-32 px-10'>
          <img
            src={HeroImage}
            alt='Ma jolie Pippo Pizza'
            className='absolute z-0 top-10 right-0'
          />

          {/* macaron */}
          <div className='absolute right-96 top-96 bg-action w-52 h-52 rounded-full p-3'>
            <div className='w-full h-full rounded-full border-4 border-dotted border-beige text-beige flex items-center justify-center'>
              <div className='text-center'>
                <span className='block font-title tracking-wide'>
                  <span className='text-6xl'>5</span>
                  <span className='text-2xl'>,50€</span>
                </span>
                <span className='text-2xl'>seulement!</span>
              </div>
            </div>
          </div>

          <div className='relative z-10'>
            <h1 className='text-secondary text-2xl mb-8'>
              <span className='block'>
                Une expérience culinaire exceptionnelle,
              </span>
              <span>livrée directement à votre porte! </span>
            </h1>
            <h2 className='font-title text-action text-9xl'>
              <span className='block'>Pizza</span>
              <span>Pippo</span>
            </h2>
            <Button className='mt-10' color='primary' theme='large'>
              Créer un compte
            </Button>
          </div>
          <div className='w-full justify-end'></div>
        </div>
      </Container>
    </div>
  );
}
