import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Calculator from './component/calculator';
import Home from './pages/Home';
import Quotes from './pages/Quotes';
// eslint-disable-next-line react/prefer-stateless-function
class App extends React.Component {
  render() {
    return (
      <div className="big-container">
        <Routes>

          <Route path="/" element={<Home />} />
          <Route path="Calculator" element={<Calculator />} />

          <Route path="Quotes" element={<Quotes />} />

        </Routes>
      </div>
    );
  }
}

export default App;
