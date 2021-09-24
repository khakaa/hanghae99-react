import React from "react";
import { useHistory } from "react-router";

const Start = (props) => {
  const history = useHistory();

  return (
    <div>
      <h1>my dictionary</h1>
      <button
        onClick={() => {
          history.push("/word");
        }}
      >
        추가하기 페이지로
      </button>
      <button onClick={() => history.push("/list")}>단어 목록 페이지로</button>
    </div>
  );
};

export default Start;
