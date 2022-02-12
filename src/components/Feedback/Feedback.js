const Feedback = ({ onGoodIncrement, onNeutralIncrement, onBadIncrement }) => {
  return (
    <div>
      <button type="button" onClick={onGoodIncrement}>
        Good
      </button>
      <button type="button" onClick={onNeutralIncrement}>
        Neutral
      </button>
      <button type="button" onClick={onBadIncrement}>
        Bad
      </button>
    </div>
  );
};

export default Feedback;
