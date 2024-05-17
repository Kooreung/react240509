import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

function SpringRoot() {
  return (
    <div>
      <div
        style={{
          border: "1px solid black",
          marginBottom: "1rem",
          display: "flex",
          gap: "5px",
        }}
      >
        {/*<div>*/}
        {/*  <a href="/spring/learn">learn</a>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <a href="/spring/api">API</a>*/}
        {/*</div>*/}
        {/*<div>*/}
        {/*  <a href="/spring/doc">doc</a>*/}
        {/*</div>*/}

        {/* Link to : react-router 쓸 때 쓰는 링크 연결 */}
        {/* 페이지 전체 새로고침이 아닌 Component 연결 */}
        <div>
          <Link to="/spring">home</Link>
        </div>
        <div>
          <Link to="/spring/learn">learn</Link>
        </div>
        <div>
          <Link to="/spring/api">API</Link>
        </div>
        <div>
          <Link to="/spring/doc">doc</Link>
        </div>
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
        // index : 상위 path 만 입력 시 나오는 component 로 설정
        { index: true, element: <div>spring main page</div> },
        { path: "api", element: <div>api page</div> },
        { path: "doc", element: <div>doc page</div> },
        { path: "learn", element: <div>learn page</div> },
      ],
    },
  ]);
  return <RouterProvider router={router} />;
}

export default App;
