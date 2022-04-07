import React, {ChangeEvent, useState, KeyboardEvent} from 'react';
import {v1} from "uuid";

export const Tdl = () => {

    const [tasks, setTasks]=useState(
        [
            {id:v1(), title:"Book", isDone:false},
            {id: v1(), title:"Milk", isDone:true}
        ]
    )

    const [title, setTitle]=useState("")
    const [error, setError]=useState("")

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

    return (
        <div>
            <h3>What to buy</h3>
         <input value={title}
            onChange={onChangeHandler}
                className={error ? "error" : ""}
                onKeyPress={onKeyPressHandler}
            />
            <button onClick={onClickHandler}>+</button>
            {error && <div className={"errorMessage"}>{error}</div>}

            {tasks.map((m)=>{

                    return (

                        <li>
                            <span><input type="checkbox"
                                         checked={m.isDone}
                            onChange={(e:ChangeEvent<HTMLInputElement>)=>checkBoxHandler(m.id, e.currentTarget.checked)}
                            />
                            </span>
                            <span>{m.title}</span>
                            <button onClick={()=>removeTaskBtn(m.id)}>X</button>

                        </li>
                    )
                }
            )}
        </div>
    );
};

