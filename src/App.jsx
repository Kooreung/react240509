import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { BoardAdd } from "./BoardAdd.jsx";
import { BoardEdit } from "./BoardEdit.jsx";
import { BoardList } from "./BoardList.jsx";

function App(props) {
  const router = createBrowserRouter([
    { path: "/add", element: <BoardAdd /> },
    {
      path: "/edit",
      element: <BoardEdit />,
    },
    { path: "/list", element: <BoardList /> },
    {
      path: "/board",
      children: [
        { path: "write", element: <div>게시물 작성하기</div> },
        { path: "edit", element: <div>게시물 수정하기</div> },
      ],
    },
    {
      path: "/spring",
      children: [
        { path: "framework", element: <div>스프링 프레임워크</div> },
        { path: "doc", element: <div>스프링 설명</div> },
        { path: "learn", element: <div>스프링 배우기</div> },
      ],
    },
  ]);
  // 각 객체는 path 와 element 보유
  return <RouterProvider router={router} />;
}

export default App;
