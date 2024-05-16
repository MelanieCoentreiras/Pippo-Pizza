import React from "react";
import Container from "../../elements/Container";
import Image1Product from "../../../medias/images/products/LastProducts-1.png";
import Image2Product from "../../../medias/images/products/LastProducts-2.png";
import Image3Product from "../../../medias/images/products/LastProducts-3.png";

export default function LastProducts() {
  return (
    <Container>
      <div className='grid grid-rows-2 gap-8 grid-cols-2 w-full h-98 my-20 px-10'>
        <div className='relative bg-action row-span-2 h-full w-full rounded-2xl flex'>
          <div className='relative p-12 z-10 w-full flex flex-col items-center'>
            <span className='block font-title text-action text-5xl tracking-wide text-center'>
              <img
                src={Image1Product}
                className='absolute top-0 left-0 h-full w-full rounded-2x object-cover'
                alt='La pizza Pippo Inferno: du feu, du goût, du love!'
              />
              <span className='text-beige'>Pippo</span>
              <span className='text-primary'> Inferno</span>
            </span>
            <span className='block bg-beige rounded-full w-80 py-3 mt-4 text-center'>
              <span className='font-title text-2xl text-action'>
                Du feu, du goût, du love!
              </span>
            </span>
          </div>
        </div>
        <div className='relative bg-primary h-full rounded-2xl'>
          <img
            src={Image2Product}
            className='absolute top-0 left-0 h-full w-full rounded-2xl object-cover z-0'
            alt='La pizza Pippo Tornado: Un tourbillon de fromages AOP!'
          />
          <div className='relative p-12 z-10'>
            <span className='block font-title text-action text-5xl tracking-wide mb-2.5'>
              Pippo Tornado
            </span>
            <span className='text-xl text-secondary'>
              Un tourbillon de fromages AOP
            </span>
          </div>
        </div>
        <div className='relative bg-primary h-full rounded-2xl'>
          <img
            src={Image3Product}
            className='absolute top-0 left-0 h-full w-full rounded-2xl object-cover z-0'
            alt='La pizza Pippo Fantastico: du feu, Une illumination gastronomique!'
          />
          <div className='relative p-12 z-10'>
            <span className='block font-title text-action text-5xl tracking-wide mb-2.5'>
              Pippo Fantastica
            </span>
            <span className='text-xl text-secondary'>
              Une illumination gastronomique
            </span>
          </div>
        </div>
      </div>
    </Container>
  );
}
