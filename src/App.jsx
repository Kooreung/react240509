import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App(props) {
  const router = createBrowserRouter([
    { path: "/add", element: <div>글 작성 페이지</div> },
    {
      path: "/edit",
      element: <div>글 수정 페이지</div>,
    },
    { path: "/list", element: <div>글 목록 페이지</div> },
  ]);
  // 각 객체는 path 와 element 보유
  return <RouterProvider router={router} />;
}

export default App;
