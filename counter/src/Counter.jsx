import React from "react";
import "./index.css"

const Counter = () => {


    const [count, setCount] = React.useState(0);

    function AddCount(value) {
        setCount(count + value);
    }

    function RemoveCount(value) {
        setCount(count - value);
    }

    return (
        <div className="main">
            <h1>Counter App</h1>
            <h2>Count : {count}</h2>

            <button onClick={() => AddCount(1)}>AddCount</button>
            <button onClick={() => RemoveCount(1)}>RemoveCount</button>

        </div>
    )
}

export default Counter;