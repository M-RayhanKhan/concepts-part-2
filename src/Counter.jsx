import { useState } from "react";


const Counter = () => {
    // eslint-disable-next-line no-unused-vars
    const [count, setCount] = useState(0);

    const hadndleAdd = () =>{
        const newCount = count + 1;
        setCount(newCount)
    }
    const handleReduce = () => {
        const newCount = count - 1;
        setCount(newCount)
    }
    
    return (
        <div style={{border: '2px solid black'}}>
            <h4>Counter: {count}</h4>
            <button onClick={hadndleAdd}>Add </button>
            <button onClick={handleReduce}>Reduce</button>
        </div>
    );
};

export default Counter;