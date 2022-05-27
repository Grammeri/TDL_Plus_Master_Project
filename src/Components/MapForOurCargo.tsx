import React, {ChangeEvent} from 'react';
import {InArrayPropsType} from "./Todo";
import {ButtonUniversal} from "./tags/ButtonUniversal";
import {Checkbox} from "./tags/Checkbox";

type MapPropsType = {
    cargoOfskills: Array<InArrayPropsType>
    setCargoOfskills: (cargoOfskills: Array<InArrayPropsType>) => void
    changeIsDone:(id:number,eventValue:boolean)=>void
}

export const MapForOurCargo = (props: MapPropsType) => {

    // const onClickHandler = (id:number)=>{
    //  props.removeSkill(id)
    // }

    const removeSkill = (id: number) => {
        props.setCargoOfskills(props.cargoOfskills.filter(f => f.id !== id))
    }

    const onChangeCheckHandler = (id:number, eventValue:boolean) =>{
        props.changeIsDone(id,eventValue)
    }


       return (
        <ul>
            {props.cargoOfskills.map((el, index) => {

                return (
                    <li key={el.id}>
                       {/* <button onClick={() => {removeSkill(el.id)}}>X</button>*/}
                        <ButtonUniversal name={"X"} callBack={()=>{removeSkill(el.id)}}/>
                        <span>{el.id}</span>
                        {/*<input type="checkbox" checked={el.isDone} onChange={(e)=>onChangeCheckHandler(el.id,e.currentTarget.checked)} />*/}

                        <Checkbox isDone={el.isDone} callBack={(eventValue:boolean)=>onChangeCheckHandler(el.id, eventValue)}/>
                        <span>{el.skill}</span>
                    </li>
                )
            })}
        </ul>
    );
};

export default Map;