import React from "react";
import Navbar from "./components/Navbar";
import Card from "./components/Main";
import cardData from "./data"

export default function App() {
  const cardElement = cardData.map( data => <Card props = {data} />)
  return (
    <div>
      <header>
        <Navbar />
      </header>
      <main>
        {cardElement}
      </main>
      
    </div>
  );
}
