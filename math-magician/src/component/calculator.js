import React from 'react';
import './calculator.css';

class Calculator extends React.Component {
    render(){
        return(
            <div className="container">
              <input type="text" value="0" className="show-val" />
                <button type="button" className="Ac">AC </button>
                <button type="button" className="plus-minus" >+/-</button>
                <button type="button" className="module">%</button>
                <button type="button" className="divise">÷</button>
                <button type="button" className="seven">7</button>
                <button type="button" className="height">8</button>
                <button type="button" className="nine">9</button>
                <button type="button" className="multiply">x</button>
                <button type="button" className="four">4</button>
                <button type="button" className="five">5</button>
                <button type="button" className="six">6</button>
                <button type="button" className="minus">-</button>
                <button type="button" className="one">1</button>
                <button type="button" className="two">2</button>
                <button type="button" className="three">3</button>
                <button type="button" className="plus">+</button>
                <button type="button" className="zero">0</button>
                <button type="button" className="equal">=</button>
            </div>
        )
    }
}

export default Calculator;