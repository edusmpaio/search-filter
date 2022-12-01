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

  const filteredCards =
    inputValue.length > 0
      ? cardsData.filter((card) =>
          card.title.toLowerCase().includes(inputValue.toLowerCase())
        )
      : cardsData;

  return (
    <>
      <Header setInputValue={setInputValue} />
      <Cards>
        {filteredCards.map((card) => (
          <Card key={card.title} title={card.title} Icon={card.icon} />
        ))}
      </Cards>
    </>
  );
}

export default App;
