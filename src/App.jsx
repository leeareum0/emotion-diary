import "./App.css";
import { Routes, Route } from "react-router-dom";
import { useReducer, useRef } from "react";
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
  switch (action.type) {
    case "CREATE":
      return [action.data, ...state];
  }
}

function App() {
  const [data, dispatch] = useReducer(reduecer, mockData);
  const idRef = useRef(3);

  const onCreate = (createdDate, emotionId, content) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        createdDate,
        emotionId,
        content,
      },
    });
  };

  return (
    <>
      <button
        onClick={() => {
          onCreate(new Date().getTime(), 1, "hello");
        }}
      >
        일기 추가 테스트
      </button>
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
