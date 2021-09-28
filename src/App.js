import React from "react";
import { Route } from "react-router-dom";
import Start from "./components/Start";
import { db } from "./firebase";

import Word from "./components/Word";
import List from "./components/List";
import Detail from "./components/Detail";
import { loadWordListFB } from "./redux/modules/wordList";
import { useDispatch } from "react-redux";
import styled from "styled-components";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordListFB());
  }, []);
  return (
    <div
      className="App"
      style={{ height: "100vh", maxWidth: "375px", margin: "0 auto" }}
    >
      <Wrap>
        <Route path="/" exact component={Start} />
        <Route path="/word" exact component={Word} />
        <Route path="/list" exact component={List} />
        <Route path="/detail/:index" exact component={Detail} />
      </Wrap>
    </div>
  );
}

const Wrap = styled.div`
  margin: 0 auto;
  height: inherit;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default App;
