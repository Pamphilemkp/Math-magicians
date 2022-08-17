import React, { useState } from 'react';
import './calculator.css';
import calculate from '../logic/calculate';

function Calculator() {

  const [state,  setState] = useState({
    total: null,
    next: null,
  });
  const handEvents = (event) => {
         setState((state) => calculate(state, event.target.textContent));   
  };

    return (
            <div className="container">

              <input type="text" value={state.next || state.total || 0} className="show-val" />
                <button type="button" className="AC"         onClick={handEvents} >AC</button>
                <button type="button" className="plus-minus" onClick={handEvents} >+/-</button>
                <button type="button" className="module"     onClick={handEvents} >%</button>
                <button type="button" className="divise"     onClick={handEvents} >÷</button>
                <button type="button" className="seven"      onClick={handEvents} >7</button>
                <button type="button" className="height"     onClick={handEvents} >8</button>
                <button type="button" className="nine"       onClick={handEvents} >9</button>
                <button type="button" className="multiply"   onClick={handEvents} >x</button>
                <button type="button" className="four"       onClick={handEvents} >4</button>
                <button type="button" className="five"       onClick={handEvents} >5</button>
                <button type="button" className="six"        onClick={handEvents} >6</button>
                <button type="button" className="minus"      onClick={handEvents} >-</button>
                <button type="button" className="one"        onClick={handEvents} >1</button>
                <button type="button" className="two"        onClick={handEvents} >2</button>
                <button type="button" className="three"      onClick={handEvents} >3</button>
                <button type="button" className="plus"       onClick={handEvents} >+</button>
                <button type="button" className="zero"       onClick={handEvents} >0</button>
                <button type="button" className="equal"      onClick={handEvents} >=</button>
            </div>
    );
};

export default Calculator;