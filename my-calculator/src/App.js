import React from 'react';

import Header from './components/Header'
import CalculatorBuilder from './containers/CalculatorBuilder'
import './sass/main.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <CalculatorBuilder />
    </div>
  );
}

export default App;