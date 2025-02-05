import { useState } from "react";

function Counter() {
    const [count, setCount] = useState(0);

    const addCount = () => {
        setCount(count + 1);
    }

    const decreaseCount = () => {
        if (count > 0) {
            setCount(count - 1);
        } else {
            
        }
    }

    return (
        <div>
            <button onClick={addCount}>+</button>
            <p>{count}</p>
            <button onClick={decreaseCount}>-</button>
        </div>
    )
}

export default Counter;