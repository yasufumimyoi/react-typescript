import React, { useState, useCallback } from "react";
import ContentItem from "./ContentItem";
import Memo2 from "../memo/Memo2";

const Contents: React.FC = () => {
  const [count, setCount] = useState<number>(0);

  const handleCountUp = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  const handleCountDown = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  return (
    <div>
      <h3>Content Lists</h3>
      <ContentItem
        count={count}
        handleCountUp={handleCountUp}
        handleCountDown={handleCountDown}
      />
      <Memo2 />
    </div>
  );
};

export default Contents;
