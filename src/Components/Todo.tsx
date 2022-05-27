import React, {useState} from "react";
import {MapForOurCargo} from "./MapForOurCargo";
import {ButtonUniversal} from "./tags/ButtonUniversal";


type TodoPropsType = {
    topic: string
    cargo2: number
    cargoOfskills: Array<InArrayPropsType>
    setCargoOfskills: (cargoOfskills: Array<InArrayPropsType>) => void
    // onBtnClickHandlerForFilter:(filterValue: string)=>void
    changeIsDone:(id:number,eventValue:boolean)=>void
}

export type InArrayPropsType = {
    id: number,
    skill: string,
    isDone: boolean
}

const Todo = (props: TodoPropsType) => {
    const [newFilterValue, setNewVilterValue] = useState("All")

    let FilterValueForcargoOfskills = props.cargoOfskills

    if (newFilterValue === 'In progress') {
        FilterValueForcargoOfskills =props.cargoOfskills.filter(element => !element.isDone)
    }
    if (newFilterValue === 'Done') {
        FilterValueForcargoOfskills = props.cargoOfskills.filter(element => element.isDone)
    }

    const onBtnClickHandlerForFilter = (filterValue: string) => {
        console.log(filterValue)
        setNewVilterValue(filterValue)
    }
    return (
        <div style={{margin: "20px"}}>
            <h1>{props.topic}</h1>
            <h3>{props.cargo2}</h3>
            <MapForOurCargo
                cargoOfskills={FilterValueForcargoOfskills}
                setCargoOfskills={props.setCargoOfskills}
                changeIsDone={props.changeIsDone}
            />

            <div style={{textAlign: "center"}}>
               {/* <button className={styles.td} onClick={() => {
                    onBtnClickHandlerForFilter("All")
                }}>All
                </button>
                <button className={styles.td} onClick={() => {
                    onBtnClickHandlerForFilter("In progress")
                }}>In progress
                </button>
                <button className={styles.td} onClick={() => {
                    onBtnClickHandlerForFilter("Done")
                }}>Done
                </button>*/}
                <ButtonUniversal name={"All list"} callBack={()=>{onBtnClickHandlerForFilter("ALL")}}/>
                <ButtonUniversal name={"In progress"} callBack={()=>{onBtnClickHandlerForFilter("In progress")}}/>
                <ButtonUniversal name={"Done"} callBack={()=>{onBtnClickHandlerForFilter("Done")}}/>
            </div>

        </div>
    )
}

export default Todo