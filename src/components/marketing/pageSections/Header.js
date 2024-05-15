import React from "react";
import Logo from "../../../medias/svg/logo-pippo-pizza-txt.svg";
import ShopIcon from "../../../medias/svg/shop-bag-icon.svg";
import Button from "../../elements/Button";

export default function Header() {
  return (
    <div className='relative z-10 flex items-top justify-between py-10 px-10'>
      <div className='h-20 w-full'>
        <img src={Logo} alt='Logo Pippo Pizza' />
      </div>
      <div className='w-full text-secondary text-2xl'>
        <div className='flex items-center justify-end'>
          <img src={ShopIcon} alt='' className='mr-3 mb-2' />
          <span>Commandez votre repas en ligne</span>
        </div>
        <div className='flex mt-5 items-center justify-end'>
          <Button className='' theme='' color='primary'>
            Créer un compte
          </Button>
          <Button className='' theme='' color='secondary'>
            Se connecter
          </Button>
        </div>
      </div>
    </div>
  );
}
