import React from "react";

function App(props) {
  // 나머지 모두 (rest property)
  // ...변수명
  const a = {
    name: "john",
    email: "john@example.com",
    password: "password",
    address: "gangnam",
  };

  const { name, email, ...b } = a;

  console.log(name);
  console.log(email);
  console.log(b.password);
  console.log(b.address);

  const c = {
    city: "seoul",
    country: "US",
    price: 500,
    category: "food",
  };

  const { price, ...d } = c;

  console.log(price);
  console.log(d.city);
  console.log(d.country);
  console.log(d.category);

  return <div></div>;
}

export default App;
