import React from "react";
import "./index.css"

export const App = () => {

const onBtnClick = () => {
    throw new Error("Error in  BTN");
}
    return <div>
        <button onClick={onBtnClick}>Click me</button>
        <h1>Hello World</h1>
        
    </div>;
}
