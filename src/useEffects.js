import { useEffect, useState } from "react";

const useEffects = () => {
    const [random, setRandom] = useState();

    useEffect(() => {
        console.log("Oh! Side-effect is triggered.");
    });
    const buttonClickHander = () => {
        setRandom(Math.random());
    };

    return <button onClick={buttonClickHander}>Click Me!</button>;
}

export default useEffects;