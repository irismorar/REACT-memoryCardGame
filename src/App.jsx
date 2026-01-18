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
    <>
      <section className="cards-container">
        <section className="header">
          <span
            style={{
              color:
                currentCardPairIndices.length !== 0 || movesCounter !== 20
                  ? "hsla(152, 39%, 20%, 1)"
                  : "hsla(152, 39%, 45%, 1)",
            }}
          >
            Memory Game
          </span>
          {!!movesCounter &&
            (movesCounter === 1 ? (
              <span className="attempts">{movesCounter} try</span>
            ) : (
              <span className="attempts">{movesCounter} tries</span>
            ))}
        </section>
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

      {movesCounter >= 0 && flippedUpCardIndices.length === 16 && (
        <div className="alert-container">
          <div className="alert-message">{winningMessage}</div>
        </div>
      )}

      {movesCounter === 0 && flippedUpCardIndices.length < 16 && (
        <div className="alert-container">
          <div className="alert-message">{lossMessage}</div>
        </div>
      )}
    </>
  );
}
