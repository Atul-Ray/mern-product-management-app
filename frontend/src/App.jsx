import Navbar from "./component/Navbar";
import {Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import CreatePage from "./Pages/CreatePage";

function App() {
  return (
    <>
      <div className="bg-slate-500 h-screen">
        <Navbar />

        <Routes>
          <Route path="/" element={<HomePage/>} />
          <Route path="/create" element={<CreatePage/>} />
        </Routes>
      </div>
    </>
  );
}

export default App;
