import React, {useState} from 'react';

function TemperatureCounter() {
    // Define the count variable
    const [count,setCount] = useState(20);


    return (
        <div>
            <h1>Current temperature: {count}</h1>
            <button onClick={() => setCount(count > 1 ? count - 1 : 0)}>Decrease Temp</button>
            <button onClick={() => setCount(count + 1)}>Increase Temp</button>
        </div>
    )
}

export default TemperatureCounter;