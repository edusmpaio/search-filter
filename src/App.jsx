import { useState } from "react";

import Header from "./components/Header";
import Cards from "./components/Cards";
import Card from "./components/Card";

function App() {
  return (
    <div className="h-full bg-zinc-900">
      <Header />
      <Cards>
        <Card title="Coding" />
        <Card title="Feedback" />
        <Card title="Feedback" />
        <Card title="Feedback" />
      </Cards>
    </div>
  );
}

export default App;
