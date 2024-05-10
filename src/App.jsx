import React from "react";

function App(props) {
  const a = {
    name: "son",
    age: 33,
    city: "london",
  };

  const b = a; // a 와 b 는 같은 객체를 참조
  b.age = 44;
  console.log(a.age); // 44
  console.log(b.age); // 44

  const c = {
    name: a.name,
    age: a.age,
    city: a.city,
  };
  c.age = 55;
  console.log(c.age); // 55
  console.log(a.age); // 44

  // 나머지 값 복사를 활용하여
  // const c 처럼 일일히 같은 객체 만들 필요가 없다.
  const { ...d } = a;
  d.age = 55;
  console.log(d.age); // 55
  console.log(a.age); // 44

  const e = {
    name: "lee",
    country: "korea",
    team: "paris",
    salary: 700,
    city: "seoul",
  };
  const { ...f } = e;

  e.city = "busan";
  console.log(e);
  console.log(f);

  return <div></div>;
}

export default App;
