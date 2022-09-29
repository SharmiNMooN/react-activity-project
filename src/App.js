import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";

function App() {
  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col col-9">
          <Home></Home>
        </div>
        <div className="col col-3"></div>
      </div>
    </div>
  );
}

export default App;
