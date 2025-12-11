import "./App.css";
import { useMemoryCardsLogic } from "./useMemoryCardsLogic";
import { Card } from "./cardDesign";

export default function App() {
  const { cards, flippedUpCards, flipCardUp } = useMemoryCardsLogic();
  return (
    <section className="app-container">
      <h1>Memory Card Game</h1>
      <main>
        <section className="cards-container">
          {cards.map((symbol, index) => {
            return (
              <Card
                key={index}
                symbol={symbol}
                isFlippedUp={flippedUpCards.includes(index)}
                onClickCard={() => {
                  flipCardUp(index);
                }}
              />
            );
          })}
        </section>
      </main>
    </section>
  );
}
