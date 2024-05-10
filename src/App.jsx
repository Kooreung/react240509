import React from "react";

function App(props) {
  // destructuring assignment
  const person = {
    name: "John",
    email: "john@example.com",
    address: "127.0.0.1",
  };
  // 모든 값을 할당 할 필요는 없다.
  const { name, email } = person;
  console.log(name);
  console.log(email);

  const car = {
    model: "genesis",
    company: "hyundai",
    price: 4000,
  };
  // 객체에 없는 값을 할당하면 undefined
  const { model, company, color } = car;
  console.log(color);

  const house = {
    city: "seoul",
    country: "USA",
  };

  // 객체에 없는 기본 값 할당
  const { city, country, area = 987 } = house;
  console.log(city);
  console.log(country);
  console.log(area);

  return <div></div>;
}

export default App;
