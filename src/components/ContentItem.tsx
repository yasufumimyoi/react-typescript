import React from "react";

interface Props {
  count: number;
  handleCountUp: () => void;
  handleCountDown: () => void;
}

const ContentItem: React.FC<Props> = ({
  count,
  handleCountUp,
  handleCountDown,
}) => {
  return (
    <div>
      <p>{count}</p>
      <button onClick={handleCountUp}>+</button>
      <button onClick={handleCountDown}>-</button>
    </div>
  );
};

export default ContentItem;
