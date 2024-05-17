import React from "react";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";

function SpringRoot() {
  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          height: "50px",
          textAlign: "center",
          marginBottom: "1rem",
        }}
      >
        상단 NAVBAR
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function App(props) {
  const router = createBrowserRouter([
    {
      path: "spring",
      element: <SpringRoot />,
      // 상위 path 에 element 가 있으면
      // 하위 path 는 상위 path element 에 포함되어 있다.
      // 보이게 하기 위해 Outlet 사용
      children: [
        { path: "api", element: <div>api page</div> },
        { path: "doc", element: <div>doc page</div> },
        { path: "learn", element: <div>learn page</div> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
