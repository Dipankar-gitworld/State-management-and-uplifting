import { useState } from "react";
import "../App.css"

import GroceryInput from "./GroceryInput";
import GroceryList from "./GroceryList";


function Grocery(){

    const [ list, setList ] = useState([]);
    console.log(list);
    function getData (data){
        setList([...list,data]);
    }

    return (
        <div>
            <h1 className='App'>Grocery List Maker</h1>
            <GroceryInput 
               getData={getData}
            />
            {list.map((el,index)=>{
                return < GroceryList 
                            item={el}
                            index={index}
                            list={list}
                            setList={setList}

                       />
            })}
            

        </div>
    )
}

export default Grocery;