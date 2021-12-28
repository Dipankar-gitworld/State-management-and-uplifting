function GroceryList({ item, index, list, setList }){

    const handleClick = ()=>{
        list=list.filter((el,i)=>{
            return i!==index;

        })

        setList(list);
    }
    return (
        <div>
            <ul>
                <li>
                  <h3>{item}  <button onClick={handleClick}>delete</button></h3>

                </li>
            </ul>
            
            
        </div>
    )
}

export default GroceryList;