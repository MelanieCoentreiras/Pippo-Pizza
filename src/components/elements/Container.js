import React from "react";

export default function Container({ children }) {
  // children c'est ce qu'il y a entre les balises
  return <div className='max-w-7xl h-full m-auto bg'>{children}</div>;
}
