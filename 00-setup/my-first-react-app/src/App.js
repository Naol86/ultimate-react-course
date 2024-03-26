import React, { useEffect, useState } from "react";

function App() {
    const [advice, setAdvice] = useState("here we go!");
    const [count, setCount] = useState(0);
    const getAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        // console.log(data.slip.advice);
        // console.log(data);
        // console.log(response);
        setAdvice(data.slip.advice);
        setCount((currentCount) => currentCount + 1);
    };

    useEffect(() => {
        getAdvice();
    }, []);

    return (
        <div>
            <h1>Hello World</h1>
            <button onClick={getAdvice}>advice</button>
            <h2>{advice}</h2>
            <Message count={count} />
        </div>
    );
}

function Message(props) {
    console.log(props);
    return <h1>{props.count}</h1>;
}

export default App;
