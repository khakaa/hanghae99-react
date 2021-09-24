import Word from "./components/Word";
import List from "./components/List";
import { Link, Route } from "react-router-dom";
import Start from "./components/Start";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Start} />
      <Route path="/word" exact component={Word} />
      <Route path="/list" exact component={List} />
    </div>
  );
}

export default App;
