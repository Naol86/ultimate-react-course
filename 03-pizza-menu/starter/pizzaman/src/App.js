import { useState } from "react";

function App() {
    const [advice, setAdvice] = useState("");
    const getAdvice = async () => {
        const response = await fetch("https://api.adviceslip.com/advice");
        const data = await response.json();
        setAdvice(data.slip.advice);
    };

    return (
        <div>
            <h1>hello world</h1>
            <p>here we code</p>
            <button onClick={getAdvice}>get advice</button>
            <p>{advice}</p>
        </div>
    );
}

export default App;
