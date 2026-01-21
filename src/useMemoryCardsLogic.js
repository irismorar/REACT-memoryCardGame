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

const lossMessages = [
  `Breaking news: you tried…\nbut the game said NOPE.\nBye!`,
  `Plot twist: you lost.\nEven the tutorial is concerned.\nBye!`,
  `Good game!\nWell…for everyone else.\nBye!`,
  `If losing was an Olympic sport, you’d finally get gold!\nBye!`,
  `Don’t worry, losing builds character.\nYou should be very strong by now.\nBye!`,
  `You didn’t lose.\nYou just temporarily evacuated the winner’s circle.\nBye!`,
  `Game over…\nbut the embarrassment lives on.\nBye!`,
];

const shuffleLossMessages = () => {
  return lossMessages[Math.floor(Math.random() * lossMessages.length)];
};
const lossMessage = shuffleLossMessages();

const winningMessages = [
  `Alert:\nsomeone just broke the scoreboard!\nCongrats!`,
  `Victory!\nThe legends have been updated.`,
  `Congrats!\nAchievement unlocked: TOTAL DOMINATION!`,
  `Congrats!\nYou’ve successfully embarrassed your opponents.`,
  `High five!\nYou made the pixels proud. Congrats!`,
  `Your victory has been documented for future generations.\nProud!`,
  `Extraordinary!\nYou didn’t just win, you redefined winning.`,
];

const shuffleWinningMessages = () => {
  return winningMessages[Math.floor(Math.random() * winningMessages.length)];
};
const winningMessage = shuffleWinningMessages();

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
const cards = shuffleCards();

const areCardsIdentical = (card1, card2) => {
  return card1 === card2;
};

export function useMemoryCardsLogic() {
  const [flippedUpCardIndices, setFlippedUpCardIndices] = useState([]); //all indeces of the cards flipped up
  const [currentCardPairIndices, setCurrentCardPairIndices] = useState([]);
  const [movesCounter, setMovesCounter] = useState(19);

  function flipCardUp(cardIndex) {
    if (currentCardPairIndices.length < 2) {
      setCurrentCardPairIndices((prev) => {
        return [...prev, cardIndex];
      });
      if (currentCardPairIndices.length === 1) {
        setMovesCounter((counter) => {
          return counter - 1;
        });
        const card1Index = currentCardPairIndices[0];
        const card2Index = cardIndex;
        const card1 = cards[card1Index];
        const card2 = cards[card2Index];
        if (areCardsIdentical(card1, card2)) {
          setFlippedUpCardIndices((prev) => [...prev, card1Index, card2Index]);
          setCurrentCardPairIndices([]);
        } else {
          setTimeout(() => {
            setCurrentCardPairIndices([]);
          }, 700);
        }
      }
    }
  }

  return {
    cards,
    flippedUpCardIndices,
    currentCardPairIndices,
    movesCounter,
    winningMessage,
    lossMessage,
    flipCardUp,
  };
}
