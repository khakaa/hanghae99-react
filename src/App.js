import React from "react";
import { Route } from "react-router-dom";
import Start from "./components/Start";
import { db } from "./firebase";

import Word from "./components/Word";
import List from "./components/List";
import Detail from "./components/Detail";
import { loadWordListFB } from "./redux/modules/wordList";
import { useDispatch } from "react-redux";

function App() {
  const dispatch = useDispatch();

  React.useEffect(() => {
    dispatch(loadWordListFB());
  }, []);
  return (
    <div className="App">
      <div style={{ maxWidth: "400px", margin: "0 auto" }}>
        <Route path="/" exact component={Start} />
        <Route path="/word" exact component={Word} />
        <Route path="/list" exact component={List} />
        <Route path="/detail/:index" exact component={Detail} />
      </div>
    </div>
  );
}

export default App;
