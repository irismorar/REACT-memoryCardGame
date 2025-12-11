export function Card({ symbol, isFlippedUp, onClickCard }) {
  return (
    <div className="box" onClick={onClickCard}>
      <div className="oddboxinner">{isFlippedUp ? symbol : null}</div>
    </div>
  );
}
