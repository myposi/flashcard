import React from 'react';

function App() {
  const handleClick = () => {
    alert("これは完全版です！");
  };

  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
      <h1>Flashcard App – FINAL COMPLETE VERSION</h1>
      <button onClick={handleClick}>テストボタン</button>
    </div>
  );
}

export default App;
