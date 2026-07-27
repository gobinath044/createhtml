import React, {useState} from 'react';
import { useEffect } from 'react';


const Counter = () => {

    const[count,setCount] = useState(0);

        useEffect(() => {
            setCount(count);
        });


        return (
            <>
            <div>
                count : {count}
                {/* <button onClick={() => setCount(count + 1)}>Increment</button> */}
                <button onClick={() => setCount(count + 1)} >count</button>
                <p>Count: <strong>{count}</strong></p>
            </div>
            </>
        )


}

export default Counter;