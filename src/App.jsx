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
  ]);
  // 각 객체는 path 와 element 보유
  return <RouterProvider router={router} />;
}

export default App;
