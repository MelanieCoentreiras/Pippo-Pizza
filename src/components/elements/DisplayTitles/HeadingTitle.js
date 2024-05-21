/* import React from "react";

export default function HeadingTitle(props) {
  return <div>{props.name}</div>;
} */

import React from "react";

export default function HeadingTitle(props) {
  // children est un élément de props (propriétés)
  const { children, variant } = props;

  const classDefault =
    "px-7 py-3 bg-primary font-title text-action inline-block rounded-full";

  switch (variant) {
    case "h3":
      return (
        <div className='flex item-center justify-center mb-5'>
          <h3 className={`text-lg ${classDefault}`}>{children}</h3>
        </div>
      );
    default:
      return (
        <div className='flex item-center justify-center mb-5'>
          <h2 className={`text-xl ${classDefault}`}>{children}</h2>
        </div>
      );
  }
}
