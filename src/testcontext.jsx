import { useState } from "react";
import { createContext } from "react";

export const Context = createContext()

export default function ContextProvider({ children }) {
    const [count, setCount] = useState(0)


    const TagA = () => {
        return (
            <>
                <h1>Hello</h1>
                <span className="text-red-400">{count}</span>
                <button onClick={() => setCount(count + 1)} className="bg-blue-500">click</button>
            </>
        )
    }

    return (
        <Context.Provider value={{ TagA }}>
            {children}
        </Context.Provider>
    )
}

