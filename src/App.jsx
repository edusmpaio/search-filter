import { useState } from "react";
import { MdCode, MdChat, MdWidgets, MdHelp } from "react-icons/md";

import Header from "./components/Header";
import Cards from "./components/Cards";
import Card from "./components/Card";

function App() {
  const [inputValue, setInputValue] = useState("");

  const cardsData = [
    {
      title: "Coding",
      icon: MdCode,
    },
    {
      title: "Widgets",
      icon: MdWidgets,
    },
    {
      title: "Help",
      icon: MdHelp,
    },
    {
      title: "Feedback",
      icon: MdChat,
    },
  ];

  return (
    <>
      <Header setInputValue={setInputValue} />
      <Cards>
        {cardsData
          .filter((card) => {
            return card.title.toLowerCase().includes(inputValue.toLowerCase());
          })
          .map((card, index) => {
            return (
              <Card key={`card ${index}`} title={card.title} Icon={card.icon} />
            );
          })}
      </Cards>
    </>
  );
}

export default App;
