import React from "react";

export default function Heading(props) {
  // theme = style , display = color
  const { children, variant, theme, display } = props;

  const classDefault = "mt-5";
  let font, color;

  switch (theme) {
    case "secondary":
      font = "font-title";
      break;
    default:
      font = "font-title";
  }

  switch (display) {
    case "beige":
      color = "text-beige";
      break;
    default:
      color = "text-secondary";
  }

  switch (variant) {
    case "h3":
      return (
        <div className='flex item-center justify-center mb-5'>
          <h3 className={`text-5xl ${classDefault} ${font} ${color}`}>
            {children}
          </h3>
        </div>
      );
    default:
      return (
        <div className='flex item-center justify-center mb-5 uppercase'>
          <h2
            className={`${
              // opérateur ternaire avec conditions si le thème est secondaire ? alors je veux "" sinon je veux : ""
              theme === "secondary" ? "text-5xl" : "text-2xl"
            }
            ${classDefault} ${font} ${color}`}
          >
            {children}
          </h2>
        </div>
      );
  }
}
