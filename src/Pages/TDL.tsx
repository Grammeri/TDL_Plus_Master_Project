import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {v1} from "uuid";

type FilterType = "Completed" | "InProgress" | "All"

export const Tdl = () => {

    let [tasks, setTasks]=useState(
        [
            {id:v1(), title:"Book", isDone:false},
            {id: v1(), title:"Milk", isDone:true},
            {id: v1(), title:"Map", isDone:true},
            {id: v1(), title:"Pen", isDone:false},
        ]
    )

    const [title, setTitle]=useState("")
    const [error, setError]=useState("")
    const [filter, setFilter]=useState<FilterType>("All")

    const addTask = (title:string)=>{
        setTasks([{id:v1(), title:title, isDone:true},...tasks])
    }

    const removeTask = (id:string) =>{
        debugger
        return (
            setTasks([...tasks].filter(f=>f.id !==id))
        )

    }

    const checkBoxStatus = (id:string, isDone:boolean) =>{
        setTasks(tasks.map(m=>m.id===id ? {...m, isDone} :m))
    }

    const onChangeHandler = (e:ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    }
    const onClickHandler = () => {
        if(title !==""){
            addTask(title.trim())
            setTitle("")
        } else {
            setError("Field must be populated")
        }

    }

    const removeTaskBtn = (id:string)=>{
        removeTask(id)
    }

    const checkBoxHandler = (Id:string, isDone:boolean)=>{
        checkBoxStatus(Id, isDone)
    }

    const onKeyPressHandler = (e:KeyboardEvent<HTMLInputElement>)=>{
       setError("")
        if(e.key==="Enter"){
            onClickHandler()
        }
    }

    let taskForTDL = tasks
        if (filter === "Completed"){
            tasks=taskForTDL.filter(f=>f.isDone===true)
        } if (filter==="InProgress"){
            tasks=taskForTDL.filter(f=>f.isDone===false)
        }

    const masterButton = (filterValue:FilterType)=> {
        setFilter(filterValue)
    }

    return (
        <div>
            <h3>What to buy</h3>
         <input value={title}
            onChange={onChangeHandler}
                className={error ? "error" : ""}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler}>+</button>
            {error ? <div className={"errorMessage"}>{error}</div>:""}

            {tasks.map((m)=>{
                    return (
                        <>
                        <li className={m.isDone ? "indicator" : ""}>
                            <span><input type="checkbox"
                                         checked={m.isDone}
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>checkBoxHandler(m.id, e.currentTarget.checked)}
                            />
                            </span>
                            <span>{m.title}</span>
                            <button onClick={()=>removeTaskBtn(m.id)}>X</button>
                        </li>

                        </>
                    )
                }
            )}
            <div >
                <button className={filter==="All" ? "activeFilter" : ""} onClick={()=>{masterButton("All")}}>All</button>
                <button className={filter==="InProgress" ? "activeFilter" : ""} onClick={()=>{masterButton("InProgress")}}>In progress</button>
                <button className={filter==="Completed" ? "activeFilter" : ""} onClick={()=>{masterButton("Completed")}}>Completed</button>
            </div>

        </div>
    );
};

