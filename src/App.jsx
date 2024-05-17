import React from "react";
import {
  createBrowserRouter,
  Link,
  Outlet,
  RouterProvider,
} from "react-router-dom";

// /react/doc
// /react/tutorial
// /react/sample

function NavBar() {
  return (
    <div>
      <div
        style={{
          backgroundColor: "gray",
          fontSize: "2rem",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-evenly",
          marginBottom: "2rem",
        }}
      >
        <div>
          <Link to="/react/doc">doc</Link>
        </div>
        <div>
          <Link to="/react/tutorial">tutorial</Link>
        </div>
        <div>
          <Link to="/react/sample">sample</Link>
        </div>
      </div>
      <div>
        <Outlet />
      </div>
    </div>
  );
}

const router = createBrowserRouter([
  {
    path: "react",
    element: <NavBar />,
    children: [
      { path: "doc", element: <div>react doc</div> },
      { path: "tutorial", element: <div>react tutorial</div> },
      { path: "sample", element: <div>react sample</div> },
    ],
  },
]);

function App(props) {
  return <RouterProvider router={router} />;
}

export default App;
