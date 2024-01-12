import React from "react";

function TodoItem(props){

    let {ele, index, dispatch} = props;
    let {data, isHidden} = ele;

    return (
        <>
            <h3>{isHidden ? "the content is hidden" : data}</h3>
            <button
                onClick={()=>{
                    dispatch({ type : "CHANGE_HIDDEN_VALUE", payload : index})
                }}
            >Toggle</button>
        </>
    )
}

export default TodoItem;