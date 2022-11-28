import React from "react";

import { MdCode, MdArrowForward } from "react-icons/md";

function Card({ title }) {
  return (
    <div className="bg-zinc-700 p-7 rounded-lg flex flex-col gap-3">
      <div className="flex items-center gap-3">
        <div className="bg-violet-400 p-1.5 rounded-full">
          <MdCode size={24} />
        </div>
        <h2 className="text-2xl font-semibold">{title}</h2>
      </div>
      <p className="text-neutral-300">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
        perferendis, consequuntur sapiente quos praesentium cupiditate!
      </p>
      <a
        href="#"
        className="font-bold text-lg flex items-center gap-1 w-fit hover:text-violet-400 transition-colors"
      >
        Learn more
        <MdArrowForward size={20} className="mt-0.5" />
      </a>
    </div>
  );
}

export default Card;
