import React, { useReducer, useRef, useState } from "react";
import TodoItem from "./TodoItem";

const initialState = [
    {
        data : "rough data",
        isHidden : false
    }
]

function todoReducer(state, action){
    switch(action.type){
        case "ADD_ITEM":
            return [...state, {
                data : action.payload, 
                isHidden : false
            }]

        case "CHANGE_HIDDEN_VALUE": 
            console.log(action.payload)
            return state.map((ele, i)=>{
                return i == action.payload ? {...ele, isHidden:!ele.isHidden} : ele
            })
    }
    return state

}

function TodoApp() {

    // const [inputData, setinputData] = useState("")
    // const [hide, sethide] = useState(true)
    const [todoData, dispatch] = useReducer(todoReducer, initialState)

    const returedData = useRef("rough data")
    // console.log('useref', returedData)


    return (
        <>
            <input type="text"
                placeholder="enter anything here..."
                ref={returedData}
                onKeyDown={(e)=>{
                    if(e.key == "Enter"){
                        dispatch({ type: "ADD_ITEM", payload: e.target.value })
                    }
                }}
            />
            <div>
                {
                    todoData.map((e, i)=>(
                        <TodoItem ele={e} index={i} key={i} dispatch={dispatch} />
                    ))
                }
            </div>
            <button 
            onClick={()=>{
                returedData.current.focus()
            }}
            >Go back to writing</button>

        </>
    )
}

export default TodoApp;