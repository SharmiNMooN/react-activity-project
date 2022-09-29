import { useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
  const [studyTime, setStudyTime] = useState(0);
  return (
    <div>
      <Header></Header>
      <div className="row">
        <div className="col col-9 bg-light">
          <Home setStudyTime={setStudyTime}></Home>
        </div>
        <div className="col col-3">
          <Sidebar studyTime={studyTime}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
