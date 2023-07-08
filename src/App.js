import logo from './logo.svg';
import { useState } from 'react';
import Main from './components/MainComponent';
import { BrowserRouter } from 'react-router-dom';
function App() {
  return (
    <BrowserRouter>
    <div className="App">
      <Main />
    </div>
    </BrowserRouter>
  );
}

export default App;
