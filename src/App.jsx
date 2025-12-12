import "./App.css";
import { useMemoryCardsLogic } from "./useMemoryCardsLogic";
import { Card } from "./cardDesign";

export default function App() {
  const {
    cards,
    flippedUpCardIndices,
    currentCardPairIndices,
    movesCounter,
    winningMessage,
    lossMessage,
    flipCardUp,
  } = useMemoryCardsLogic();
  return (
    <section className="app-container">
      <h1
        style={{
          color:
            currentCardPairIndices.length !== 0 || movesCounter !== 0
              ? "hsla(152, 39%, 20%, 1)"
              : "hsla(152, 39%, 45%, 1)",
        }}
      >
        Memory Card Game
      </h1>
      <main>
        <section className="cards-container">
          {cards.map((symbol, index) => {
            return (
              <Card
                key={index}
                symbol={symbol}
                isFlippedUp={
                  currentCardPairIndices.includes(index) ||
                  flippedUpCardIndices.includes(index)
                }
                onClickCard={() => {
                  flipCardUp(index);
                }}
              />
            );
          })}
        </section>
        {!!movesCounter &&
          (movesCounter <= 1 ? (
            <div
              className="attempts"
              style={{
                textDecorationThickness: `${movesCounter}px`,
              }}
            >
              {movesCounter} try!
            </div>
          ) : (
            <div
              className="attempts"
              style={{
                textDecorationThickness: `${movesCounter}px`,
              }}
            >
              {movesCounter} tries!
            </div>
          ))}
      </main>

      {movesCounter <= 20 && flippedUpCardIndices.length === 16 && (
        <div className="alert-container">
          <div className="alert-message">{winningMessage}</div>
        </div>
      )}

      {movesCounter === 20 && flippedUpCardIndices.length < 16 && (
        <div className="alert-container">
          <div className="alert-message">{lossMessage}</div>
        </div>
      )}
    </section>
  );
}
