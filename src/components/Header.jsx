import React from "react";

function Header() {
  return (
    <header className="max-w-md mx-auto pt-10 px-3">
      <h1 className="text-3xl font-bold text-center mb-4">
        What are you looking for?
      </h1>
      <div>
        <input
          type="text"
          placeholder="Filter"
          className="w-full px-4 py-2 rounded-lg"
        />
      </div>
    </header>
  );
}

export default Header;
