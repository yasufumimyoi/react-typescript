import React from "react";

const Memo2 = () => {
  //条件式内でType Guardを使用する
  const doSomething = (name: string) => {
    if (typeof name === "string") {
      console.log(name);
    }
  };

  doSomething("Max");

  return (
    <div>
      <h2>Hello</h2>
    </div>
  );
};

export default Memo2;
