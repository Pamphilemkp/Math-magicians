import React from 'react';
import Calculator from './component/calculator';

class App extends React.Component {
  render() {
    return (
      <div className='big-container'>
        <Calculator />
      </div>
    );
  }
}

export default App;