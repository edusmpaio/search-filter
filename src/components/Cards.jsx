import React from "react";

function Cards({ children }) {
  return (
    <main className="max-w-2xl px-4 pb-10 m-auto grid grid-cols-1 sm:grid-cols-2 gap-4">
      {children}
    </main>
  );
}

export default Cards;
