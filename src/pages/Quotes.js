
import React from 'react';
import Header from './Header';
  
function Quotes() {

    return (
        <div className='main-home' > 
            <Header/>
            <p className='quote-text'>
                Mathmatic is not about numbers, equations, computations <br />
                or algorithms: it is about understanding. -William Paul Thurstan.
            </p>
        </div>
    )
}
export default Quotes;