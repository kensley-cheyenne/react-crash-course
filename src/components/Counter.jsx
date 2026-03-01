import React, { useState } from 'react';
import './Counter.css';

function Counter() {
    const [arr, setArr] = useState([]);

    function addMinus() {
        setArr(prevArr => [...prevArr, '-']);
    }

    function addPlus() {
        setArr(prevArr => [...prevArr, '+']);
    }

    return (
        <div className="counter">
            <button onClick={addMinus} className="counter__button">-</button>
            <button onClick={addPlus} className="counter__button">+</button>
            {arr.toString()}
        </div>
    );
}
export default Counter;  