import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainFiles from "./MainFiles";
import Bio from "./components/Bio";
import Project from "./components/Project";
import DevelopMode from "./components/DevelopMode";


function App() {
  return (
    <>
      <BrowserRouter basename="/Portfolio">
        <Routes>
          <Route path="/" element={<MainFiles/>} />
          <Route path="/bio" element={<Bio/>} />
          <Route path="/project" element={<Project/>} />
          <Route path="/develop" element={<DevelopMode />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
