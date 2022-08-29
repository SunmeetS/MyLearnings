import { useEffect, useState } from "react";

function Ue1() {
    const [count, setCount] = useState(0);

    useEffect(() => {
            document.title = count
        }
    )

    return (
        <>
            <h1>This is Count {count}</h1>
            <button onClick={() => { setCount(count + 1) }}>+1</button>
        </>
    )

}
export default Ue1