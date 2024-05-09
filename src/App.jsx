function MyComponent() {
  // 최상위 컴포넌트 사용하지 않고 싶을 때 -> fragment <> </> 사용

  return;
  <>
    <p>Lorem ipsum.</p>
    <p>Eligendi, vel?</p>
  </>;
}

function MyComp() {
  // Return 바로 이전 최상위 Component 는 1개로 작성
  return (
    <div>
      <p>Lorem ipsum.</p>
      <p>Accusantium, fuga?</p>
    </div>
  );
}

function MyTag() {
  // 여러 줄의 jsx 코드를 쓸 때 () 사용
  return (
    <div>
      hello tag
      <p>Lorem ipsum.</p>
      <p>Accusamus, natus!</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <MyTag />
      <MyComp />
      <MyComponent />
    </div>
  );
}

export default App;
