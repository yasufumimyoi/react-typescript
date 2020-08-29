import React, { useState, useCallback } from "react";
import ContentItem from "./ContentItem";

const Contents: React.FC = (props) => {
  const [count, setCount] = useState<number>(0);

  const handleCountUp = useCallback(() => {
    setCount((prev) => prev + 1);
  }, [setCount]);

  const handleCountDown = useCallback(() => {
    setCount((prev) => prev - 1);
  }, [setCount]);

  const [todo, setTodo] = useState({ text: "Learn hooks" });

  return (
    <div>
      <h3>Content Lists</h3>
      <ContentItem
        count={count}
        handleCountUp={handleCountUp}
        handleCountDown={handleCountDown}
      />
    </div>
  );
};

export default Contents;
