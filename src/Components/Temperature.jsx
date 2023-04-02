import React, {useState} from 'react';

function TemperatureCounter() {
    // Define the count variable
    let [count,setCount] = useState(20);
    let [color,setColor] = useState("red")

    function decreaseTemp() {
        if (count > 0) {
             setCount(count - 1);
        } else {
            // Don't update the count
        }
        setBG()
    }

    function increaseTemp() {
        if (count > 0) {
             setCount(count + 1);
        } else {
            // Don't update the count
        }
        setBG()

    }

    function setBG() {
        if(count < 15) {
            setColor("blue")
        } else {
            setColor("red")
        }
    }


    return (
        <div class={color}>
            <h1>Current temperature: {count}</h1>
            <button onClick={decreaseTemp}>Decrease Temp</button>
            <button onClick={increaseTemp}>Increase Temp</button>
        </div>
    )
}

export default TemperatureCounter;