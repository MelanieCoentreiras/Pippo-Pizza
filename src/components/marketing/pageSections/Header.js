import React from "react";
import Logo from "../../../medias/svg/logo-pippo-pizza.svg";

export default function Header() {
  return (
    <div className='flex items-center justify-between py-10 px-10'>
      <div className='h-20 w-full'>
        <img src={Logo} alt='Logo Pippo Pizza' />
      </div>
      <div className='w-full text-secondary text-2xl'>
        Commandez votre repas en ligne
      </div>
    </div>
  );
}
