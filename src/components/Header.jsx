import React from "react";

import { BiSearch } from "react-icons/bi";

function Header() {
  return (
    <header className="max-w-md mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold text-center mb-4">
        What are you looking for?
      </h1>
      <div className="relative">
        <input
          type="text"
          placeholder="Filter"
          className="w-full px-4 py-2.5 rounded-lg bg-zinc-700"
        />
        <BiSearch size={20} className="absolute bottom-3 right-3" />
      </div>
    </header>
  );
}

export default Header;
