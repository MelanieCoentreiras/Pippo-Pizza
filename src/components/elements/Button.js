import React from "react";

export default function Button({ children, className, color, theme }) {
  let background;
  /*   if (color === "primary") {
    background = "bg-action hover:bg-action-hover mr-10 text-beige";
  } else if (color === "secondary") {
    background = "bg-beige hover:bg-beige-hover text-action";
  } else {
    background = "bg-primary text-secondary";
  } */

  switch (color) {
    case "primary":
      background = "bg-action hover:bg-action-hover mr-10 text-beige";
      break;
    case "secondary":
      background = "bg-beige hover:bg-beige-hover text-action";
      break;
    default:
      background = "bg-primary text-secondary";
  }

  switch (theme) {
    case "small":
      return (
        <div>
          <button
            className={`${className} ${background} px-6 py-2 rounded-full font-title tracking-wide text-base animate`}
          >
            {children}
          </button>
        </div>
      );
    case "large":
      return (
        <div>
          <button
            className={`${className} ${background} px-8 py-4 rounded-full font-title text-2xl tracking-wide animate`}
          >
            {children}
          </button>
        </div>
      );
    default:
      return (
        <div>
          <button
            className={`${className} ${background} px-6 py-3 rounded-full font-title text-xl tracking-wide animate`}
          >
            {children}
          </button>
        </div>
      );
  }
}
