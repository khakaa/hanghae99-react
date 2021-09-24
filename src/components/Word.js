import React from "react";
import { useHistory } from "react-router";
import { useDispatch } from "react-redux";

import { addWord } from "../redux/modules/wordList";

const Word = (props) => {
  const history = useHistory();
  const dispatch = useDispatch();
  const wordRef = React.useRef(null);
  const descRef = React.useRef(null);
  const exRef = React.useRef(null);

  return (
    <div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          border: "1px solid black",
          margin: "15px",
          paddingBottom: "16px",
        }}
      >
        <h2>단어 추가하기</h2>
        <p>단어</p>
        <input ref={wordRef}></input>
        <p>설명</p>
        <input ref={descRef}></input>
        <p>예시</p>
        <input ref={exRef}></input>
      </div>

      <button
        onClick={() => {
          dispatch(
            addWord({
              word: wordRef.current.value,
              desc: descRef.current.value,
              ex: exRef.current.value,
            })
          );
          history.push("/list");
          console.log(wordRef.current.value);
        }}
      >
        추가하기
      </button>
    </div>
  );
};

export default Word;
