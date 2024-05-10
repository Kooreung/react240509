import React from "react";

function MyComp(props) {
  return <div></div>;
}

function App(props) {
  return (
    <div>
      {/* props 값은 Javascript 값의 타입을 쓸 수 있다. */}
      {/* 항상 {} 중괄호가 필요하다. */}
      {/* String 타입만 중괄호 생략이 가능하다. */}
      <MyComp
        name={"son"}
        age={3.14}
        address={{ city: "seoul", country: "us" }}
        foods={["pizza", "coffee"]}
        married={true}
        action={function () {
          console.log("action");
        }}
        someAction={() => console.log("someAction")}
      />
    </div>
  );
}

export default App;
