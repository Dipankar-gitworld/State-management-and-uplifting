import { useState } from "react";
import "./GroceryInput.css";

function GroceryInput({ getData }){

    const [text, setText] = useState("");

    

    const handleChange = (e)=>{
       setText(e.target.value)
        console.log(text);
    }

    const handleclick = ()=>{
        getData(text);
        
    }
    return (
        <div className='App'>
            <input type="text" onChange={handleChange}/>
            <button onClick={handleclick} className="addBtn">Add</button>
        </div>
    )
}

export default GroceryInput;