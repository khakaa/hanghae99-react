import React from "react";
import { useHistory } from "react-router";
import { useSelector } from "react-redux";

const List = (props) => {
  const wordList = useSelector((state) => state.wordList.list);
  console.log(wordList);
  const history = useHistory();
  return (
    <div>
      {wordList.map((l, idx) => {
        return (
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              border: "1px solid black",
              margin: "15px",
            }}
          >
            <p>단어</p>
            <p>{l.word}</p>
            <p>설명</p>
            <p>{l.desc}</p>
            <p>예시</p>
            <p>{l.ex}</p>
          </div>
        );
      })}
      <button
        onClick={() => {
          history.push("/");
        }}
      >
        처음으로
      </button>
    </div>
  );
};

export default List;
