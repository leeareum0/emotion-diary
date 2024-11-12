import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useReducer } from "react";
import Home from "./pages/Home";
import New from "./pages/New";
import Diary from "./pages/Diary";
import Edit from "./pages/Edit";
import NotFound from "./pages/NotFound";

// 임시 일기 데이터
const mockData = [
  {
    id: 1,
    createData: new Date().getTime(),
    emotionId: 1,
    content: "1번 일기 내용",
  },
  {
    id: 2,
    createData: new Date().getTime(),
    emotionId: 2,
    content: "2번 일기 내용",
  },
];

function reduecer(state, action) {
  return state;
}

function App() {
  const [data, dispatch] = useReducer(reduecer, mockData);

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/new" element={<New />} />
        <Route path="/diary" element={<Diary />} />
        <Route path="/edit/:id" element={<Edit />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default App;
