import React, {useState} from 'react';

function TemperatureCounter() {
    const [count,setCount] = useState(0);

    return (
        <div>
            <h1>Current temperature: {count}</h1>
            <button onClick={() => setCount(count + 1)}>Increase Temp</button>
            <button onClick={() => setCount(count - 1)}>Decrease Temp</button>
        </div>
    )
}

export default TemperatureCounter;