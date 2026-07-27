
import React, { useState, useEffect } from "react";

const DataFetcher = () => {

    const[data,setdata] = useState([]);

    useEffect(() => {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then((res) => res.json())
        .then((data) => setdata.json())
    },[]);
    }

    return (
        <div>
            <h1>Post</h1>
        </div>

    )

export default DataFetcher;