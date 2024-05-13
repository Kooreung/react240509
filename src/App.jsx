import React, { useState } from "react";

function App(props) {
  const [car, setCar] = useState({
    name: "",
    model: "",
    company: "",
    price: "",
  });

  const handleModelChange = (e) => {
    return setCar({ ...car, model: e.target.value });
  };

  function handlePriceChange(e) {
    const { ...nextCar } = car;
    nextCar.price = e.target.value;
    setCar(nextCar);
  }

  return (
    <div>
      <div>
        <input
          type="text"
          placeholder={"이름"}
          onChange={(e) => {
            setCar({ ...car, name: e.target.value });
          }}
        />
      </div>
      <div>
        <input type="text" placeholder={"모델"} onChange={handleModelChange} />
      </div>
      <div>
        <input
          type="text"
          placeholder={"회사"}
          onChange={(e) => {
            const { ...nextCar } = car;
            nextCar.company = e.target.value;
            setCar(nextCar);
          }}
        />
      </div>
      <div>
        <input type="text" placeholder={"가격"} onChange={handlePriceChange} />
      </div>
      <ul>
        <li>이름 : {car.name}</li>
        <li>모델 : {car.model}</li>
        <li>회사 : {car.company}</li>
        <li>가격 : {car.price}</li>
      </ul>
    </div>
  );
}

export default App;
