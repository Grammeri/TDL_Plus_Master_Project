import React, {ChangeEvent, useState, KeyboardEvent, MouseEvent} from 'react';
import {v1} from "uuid";

export const Tdl2 = () => {

    let [state, setState] = useState([
        {id: v1(), title: "JSX", isDone: false},
        {id: v1(), title: "React", isDone: false},
        {id: v1(), title: "Redux", isDone: true},
        {id: v1(), title: "View", isDone: true}
    ])

    const [title, setTitle] = useState("")
    const [error, setError] = useState(false)
    const [filter, setFilter] = useState("All")

    const addTask = (title: string) => {
        setState([{id: v1(), title: title, isDone: false}, ...state])
    }
    const onChangeHandler = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickHandler = () => {
        if (title !== "") {
            addTask(title.trim())
        } else {
            setError(true)
        }
        setTitle("")
    }

    const onKeyPressHandler = (e: KeyboardEvent<HTMLInputElement>) => {
        if (e.key === 'Enter') {
            onClickHandler()
        }
        setError(false)
    }

    const changeCheckBoxStatus = (id: string, isDone: boolean) => {
        setState(state.map(m => m.id === id ? {...m, isDone} : m))
    }

    const onCheckBoxClickHandler = (id: string, value: boolean) => {
        changeCheckBoxStatus(id, value)
    }

    let colendar = state
    if(filter==="Completed"){
        debugger
        state=colendar.filter(f=>f.isDone)
    }

        if(filter==="In Progress"){
            debugger
            state=colendar.filter(f=>!f.isDone)
        }


    const onFilterClick = (value: string) => {
        debugger
        return (
            setFilter(value)
        )

    }

    return (
        <div>
            <h1>Experiment</h1>
            <input type="text"
                   value={title}
                   onChange={onChangeHandler}
                   className={error ? "warning" : ""}
                   onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler}>+</button>
            {error ? <h3 className={"warningSign"}>Field must be populated!</h3> : ""}
            <ul>
                {state.map(m => {
                    return (
                        <li>
                            <input style={{marginTop: "15px"}}
                                   type={"checkbox"}
                                   checked={m.isDone}
                                   onClick={(e: MouseEvent<HTMLInputElement>) => {
                                       onCheckBoxClickHandler(m.id, e.currentTarget.checked)
                                   }}
                            />
                            <span>{m.title}</span>
                            <span>{m.id}</span>
                        </li>
                    )
                })}
            </ul>
            <button onClick={() => {
                onFilterClick("All")
            }}>All
            </button>
            <button onClick={() => {
                onFilterClick("Completed")
            }}>Completed
            </button>
            <button onClick={() => {
                onFilterClick("In Progress")
            }}>In Progress
            </button>
        </div>
    );
};

