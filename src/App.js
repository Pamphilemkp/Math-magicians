import React from 'react';
import Calculator from './component/calculator';
import {Routes, Route} from 'react-router-dom';
import Home from './pages/Home';
import Quotes from './pages/Quotes';

class App extends React.Component {
  render() {
    return (
      <div className='big-container'>
        <Routes>

          <Route path='/'  element={<Home />} />
          <Route path="Calculator" element={<Calculator />} >
          <Calculator />
          </Route>
            
          <Route path="Quotes" element={<Quotes />} />

        </Routes>  
      </div>
    );
  }
}

export default App;