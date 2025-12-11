import { useState } from "react";

const cardValues = [
  "B",
  "B",
  "8",
  "8",
  "₿",
  "₿",
  "🤍",
  "🤍",
  "✨",
  "✨",
  "💭",
  "💭",
  "🌙",
  "🌙",
  "฿",
  "฿",
];

const shuffleCards = () => {
  const shuffledCardValues = [...cardValues];
  for (let i = shuffledCardValues.length - 1; i > 0; i--) {
    const randomIndex = Math.floor(Math.random() * (i + 1));
    const helperVariable = shuffledCardValues[i];
    shuffledCardValues[i] = shuffledCardValues[randomIndex];
    shuffledCardValues[randomIndex] = helperVariable;
  }
  return shuffledCardValues;
};

export function useMemoryCardsLogic() {
  const [cards, setCards] = useState(shuffleCards());
  const [flippedUpCards, setFlippedUpCards] = useState([]);

  function flipCardUp(cardIndex) {
    setFlippedUpCards((prev) => {
      return [...prev, cardIndex];
    });
  }

  return {
    cards,
    flippedUpCards,
    flipCardUp,
  };
}
