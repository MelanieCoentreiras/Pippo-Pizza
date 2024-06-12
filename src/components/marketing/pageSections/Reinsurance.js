import React from "react";
import Container from "../../elements/Container";
import HeadingTitle from "../../elements/DisplayTitles/HeadingTitle";
import Heading from "../../elements/DisplayTitles/Heading";
import ImageReinsurance1 from "../../../medias/images/reinsurance/Reinsurance-1.png";
import ImageReinsurance2 from "../../../medias/images/reinsurance/Reinsurance-2.png";
import ImageReinsurance3 from "../../../medias/images/reinsurance/Reinsurance-3.png";

export default function Reinsurance() {
  return (
    <div className='bg-action w-full h-screen mb-20 pt-20'>
      <Container>
        <HeadingTitle variant='h3'>Always delicious ;)</HeadingTitle>
        <Heading variant='h3' theme='secondary' display='beige'>
          Choisissez la qualité!
        </Heading>
        <p className='text-center w-full max-w-3xl mx-auto'>
          Chez Pippo, nous croyons en l'importance de la qualité et de
          l'authenticité. C'est pourquoi nous sélectionnons avec soin les
          meilleurs produits pour nos pizzas. Nos ingrédients proviennent de
          fournisseurs locaux réputés, garantissant fraîcheur et saveurs
          incomparables.
        </p>

        <div className='grid grid-cols-3 gap-x-20 mt-10 mb-5 h-96'>
          <div className='w-full h-full'>
            <div className='relative w-full h-72'>
              <img
                src={ImageReinsurance1}
                alt=''
                className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl'
              />
            </div>

            <div className='flex flex-col items-center justify-center px-5 py-5'>
              <Heading variant='' display='beige'>
                homemade food
              </Heading>
              <p className='text-center'>
                Chaque ingrédient est choisi pour sa qualité, en passant par la
                farine bio moulue dur pierres, aux tomates mûries au soleil.
              </p>
            </div>
          </div>

          <div className='w-full h-full'>
            <div className='relative w-full h-72'>
              <img
                src={ImageReinsurance2}
                alt=''
                className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl'
              />
            </div>

            <div className='flex flex-col items-center justify-center px-5 py-5'>
              <Heading variant='' display='beige'>
                artisanal first
              </Heading>
              <p className='text-center'>
                Nous favorisons une agriculture durable et locale, tout en vos
                offrant une expérience au top!
              </p>
            </div>
          </div>

          <div className='w-full h-full'>
            <div className='relative w-full h-72'>
              <img
                src={ImageReinsurance3}
                alt=''
                className='bg-primary absolute top-0 left-0 w-full h-full object-cover z-0 rounded-2xl'
              />
            </div>

            <div className='flex flex-col items-center justify-center px-5 py-5'>
              <Heading variant='' display='beige'>
                sélection de compèt
              </Heading>
              <p className='text-center'>
                Légumes de saison, fromages et charcuteries fines sont tous
                issus de fermes et de producteurs locaux passionnés par leur
                métier
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
