import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
  useSearchParams,
} from "react-router-dom";

function Root() {
  return (
    <div>
      <div>
        <Link to="/">Home</Link>
        <br />
        <Link to="/list">List</Link>
      </div>
      <hr />
      <div>
        <Outlet />
      </div>
    </div>
  );
}

function BoardList() {
  return (
    <div>
      <div>
        <Link to={"/board?id=1"}>1번 게시물</Link>
      </div>
      <div>
        <Link to={"/board?id=2"}>2번 게시물</Link>
      </div>
      <div>
        <Link to={"/board?id=3"}>3번 게시물</Link>
      </div>
    </div>
  );
}

function BoardView() {
  // URL 에 있는 query string 읽어오기 위한 method
  // 배열을 return
  // [searchParams, setSearchParams]
  // 0번 index 값이 query String 을 읽어오는 기능
  // query String 이 key : value 이므로, 하단의 param 에 key:value 저장
  const [params] = useSearchParams();
  return <div>{params.get("id")}번 게시물 보기</div>;
}

function App(props) {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Root />,
      children: [
        { index: true, element: <div>MAIN PAGE</div> },
        // board 에 쿼리스트링 연결이 필요
        { path: "board", element: <BoardView /> },
        { path: "list", element: <BoardList /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
