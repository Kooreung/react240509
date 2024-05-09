function MyTag() {
  const hello = <h3>hello component</h3>;
  return hello;
}

function MyContent() {
  return <p>my content</p>;
}

function App() {
  return (
    <>
      <div>
        <h1>Hello React</h1>
        <MyTag />
        {/* <h3> hello component </h3> */}
        <MyContent />
        {/* <p> my content </p> */}
      </div>
    </>
  );
}

export default App;
