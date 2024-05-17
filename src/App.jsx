import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

// /about
// /search
// /home
// 위 경로에 다른 컴포넌트 출력 되도록
const router = createBrowserRouter([
  { path: "/about", element: <div>about page</div> },
  { path: "/search", element: <div>search page</div> },
  { path: "/home", element: <div>home page</div> },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
