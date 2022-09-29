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
        <div className="col-md-9 col-sm-12 bg-light mt-2">
          <Home setStudyTime={setStudyTime}></Home>
        </div>
        <div className="col-sm-12 col-md-3 mt-2">
          <Sidebar studyTime={studyTime}></Sidebar>
        </div>
      </div>
    </div>
  );
}

export default App;
