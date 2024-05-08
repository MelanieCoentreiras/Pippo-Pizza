import React from "react";

export default function Button({ children, className }) {
  return (
    <div>
      <button
        className={`${className} px-6 py-3 rounded-full font-title text-xl tracking-wide animate`}
      >
        {children}
      </button>
    </div>
  );
}
