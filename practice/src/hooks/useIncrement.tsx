import { useState } from "react"

type incrementType = () => number | void; 

export const useIncrement = (value: number) : [number, incrementType]=> {
    const [count, setCount] = useState(value);
    const increment = () => {
        return setCount((c: number) => {return c + 1});
    } 
    return [count, increment];
};