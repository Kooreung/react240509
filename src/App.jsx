function App() {
  const a = 7;
  const b = 3;

  const c = a > 10 && b > 0;
  const d = a < 10 && b > 0;

  console.log("c", c);
  console.log("d", d);

  const e = a > 10 || b > 0;
  const f = a < 10 || b > 10;

  console.log("e", e);
  console.log("f", f);

  // && (and .. 그러면) : 왼쪽 항이 true 면 오른쪽 값
  const g = a < 10 && "hello";
  const h = a < 5 && "hi";
  console.log("g", g);
  console.log("h", h);

  // || (or .. 아니면) : 왼쪽 항이 false 면 오른쪽 값
  const i = a < 10 || "greeting";
  const j = a < 5 || "안녕";

  return <div></div>;
}

export default App;
