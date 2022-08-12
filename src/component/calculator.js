import React from 'react';
import './calculator.css';
import calculate from '../logic/calculate'

class Calculator extends React.Component {

  constructor (props) {
    super(props);
    this.state = {
      total: null,
      next: null,
    };
    this.handEvents = this.handEvents.bind(this);
  }


  handEvents(event) {
         this.setState((state) =>calculate(state, event.target.textContent));   
  }

  render() {
    return (
            <div className="container">
              <input type="text" value={this.state.next || this.state.total || 0} className="show-val" />
                <button type="button" className="AC"         onClick={this.handEvents} >AC</button>
                <button type="button" className="plus-minus" onClick={this.handEvents} >+/-</button>
                <button type="button" className="module"     onClick={this.handEvents} >%</button>
                <button type="button" className="divise"     onClick={this.handEvents} >÷</button>
                <button type="button" className="seven"      onClick={this.handEvents} >7</button>
                <button type="button" className="height"     onClick={this.handEvents} >8</button>
                <button type="button" className="nine"       onClick={this.handEvents} >9</button>
                <button type="button" className="multiply"   onClick={this.handEvents} >x</button>
                <button type="button" className="four"       onClick={this.handEvents} >4</button>
                <button type="button" className="five"       onClick={this.handEvents} >5</button>
                <button type="button" className="six"        onClick={this.handEvents} >6</button>
                <button type="button" className="minus"      onClick={this.handEvents} >-</button>
                <button type="button" className="one"        onClick={this.handEvents} >1</button>
                <button type="button" className="two"        onClick={this.handEvents} >2</button>
                <button type="button" className="three"      onClick={this.handEvents} >3</button>
                <button type="button" className="plus"       onClick={this.handEvents} >+</button>
                <button type="button" className="zero"       onClick={this.handEvents} >0</button>
                <button type="button" className="equal"      onClick={this.handEvents} >=</button>
            </div>
    );
  }
}

export default Calculator;