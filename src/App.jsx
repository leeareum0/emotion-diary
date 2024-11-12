import "./App.css";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import NotFound from "./pages/NotFound";
import { Routes, Route } from "react-router-dom";
import Buttom from "./components/Button";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header
        title={"Header"}
        leftChild={<Buttom text={"Left"} />}
        rightChild={<Buttom text={"Right"} />}
      />

      <Buttom
        text={"123"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />
      <Buttom
        text={"123"}
        type={"POSITIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />
      <Buttom
        text={"123"}
        type={"NAGATIVE"}
        onClick={() => {
          console.log("123번 버튼 클릭");
        }}
      />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
