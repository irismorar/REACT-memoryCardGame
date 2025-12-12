export function Card({ symbol, isFlippedUp, onClickCard }) {
  return (
    <div
      className="box"
      onClick={onClickCard}
      style={{
        backgroundColor: isFlippedUp
          ? "hsla(204, 18%, 33%, 1)"
          : "hsla(204, 18%, 13%, 1)",
        border: isFlippedUp
          ? "solid  hsla(10, 5%, 55%, 1)"
          : "solid hsla(204, 18%, 33%, 1)",
        borderColor: isFlippedUp
          ? "hsla(10, 5%, 55%, 1)"
          : "hsla(204, 18%, 33%, 1)",
      }}
    >
      <div className="oddboxinner">{isFlippedUp ? symbol : null}</div>
    </div>
  );
}
