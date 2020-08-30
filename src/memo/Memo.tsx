import React, { useState } from "react";

//?をつけるとオプショナルになる
interface Memo {
  title: string;
  count?: number;
  lists?: string[];
  disabled?: boolean;
  obj3?: {
    id: string;
    title: string;
  };
  //配列の中にオブジェクトパターン
  objArr?: {
    id: string;
    title: string;
  }[];
  handleText?: (event: React.ChangeEvent<HTMLButtonElement>) => void;
}

const Memo = () => {
  const [count, setCount] = useState<number>(0);
  const [name, setName] = useState<string>("");
  const [state, setState] = useState({
    firstName: "",
    lastName: "",
    email: "",
  });

  //Mouseを使用する時に使用するイベント
  const handleAdd = (e: React.MouseEvent<HTMLButtonElement>) => {
    setCount((prev) => prev + 1);
  };

  //textFieldが変更する時に使用するイベント
  const handleText = (e: React.ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  //定義した型を先に使用するパターン
  const ShowComponent: React.FC<Memo> = (props) => {
    return <span>{props.title}</span>;
  };

  //定義した型をprops内で使用するパターン
  const ShowComponentTwo = (props: Memo) => {
    return <span>{props.title}</span>;
  };

  //props内で初めて定義をするパターン
  const ShowComponentThree = (props: { title: string }) => {
    return <span>{props.title}</span>;
  };

  //分割代入したパターン
  const ShowComponentFour = ({ title }: Memo) => {
    return <span>{title}</span>;
  };

  //定義した型を先に使用してかつ分割代入パターン
  const ShowComponentFive: React.FC<Memo> = ({ title }) => {
    return <span>{title}</span>;
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleAdd}>+</button>
      <ShowComponent title={"Hello"} />
      <ShowComponentTwo title={"Why"} />
      <ShowComponentThree title={"OK"} />
      <form>
        <input type="text" value={name} onChange={handleText} />
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Memo;
