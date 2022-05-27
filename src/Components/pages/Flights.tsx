import React, {useState} from 'react';
import styles from "./Flights.module.css"
import {ButtonUniversal} from "../tags/ButtonUniversal";

export const Flights = () => {
    const [cities, setCities] = useState([
        {cities: 'Houston', value: "1 AM", number: ' a1234567890'},
        {cities: 'Houston', value: "2 AM", number: ' z1234567890'},
        {cities: 'NY', value: "6 AM", number: ' w1234567890'},
        {cities: 'Houston', value: "10 AM", number: ' e1234567890'},
        {cities: 'Houston', value: "2 PM", number: ' c1234567890'},
        {cities: 'NY', value: "4 PM", number: ' r1234567890'},
        {cities: 'Houston', value: "8 PM", number: ' x1234567890'},
        {cities: 'NY', value: "10 PM", number: ' v1234567890'},
    ])
    const [newFilterValue, setNewVilterValue] = useState("All flights")


    let citiesCollander = cities

    if (newFilterValue === 'Houston') {
        citiesCollander = cities.filter(element => element.cities === 'Houston')
    }
    if (newFilterValue === 'NY') {
        citiesCollander = cities.filter(element => element.cities === 'NY')
    }

    const onBtnClickHandlerForFilter = (filterValue: string) => {
            setNewVilterValue(filterValue)
    }

    return (
        <div style={{marginLeft: "50px", backgroundColor: 'orange'}}>
            <h1 style={{textAlign: "center"}}>Flights</h1>
            <table style={{border: "3px black solid"}}>
                {citiesCollander.map((element, index) => {
                    return (
                        <tr className={styles.td}>
                            <td className={styles.td}>{index}</td>
                            <td className={styles.td}>{element.cities}</td>
                            <td className={styles.td}>{element.value}</td>
                            <td className={styles.td}>{element.number}</td>
                        </tr>
                    )
                })}

            </table>
            <div style={{textAlign: "center"}}>
                {/*<button className={styles.td} onClick={() => {onBtnClickHandlerForFilter("All cities")}}>All cities</button>
                <button className={styles.td} onClick={() => {onBtnClickHandlerForFilter("Houston")}}>Houston</button>
                <button className={styles.td} onClick={() => {onBtnClickHandlerForFilter("NY")}}>NY</button>*/}
                <ButtonUniversal name={"All flights"} callBack={()=>{onBtnClickHandlerForFilter ("All flights")}}/>
                <ButtonUniversal name={"Houston"} callBack={()=>{onBtnClickHandlerForFilter ("Houston")}}/>
                <ButtonUniversal name={"NY"} callBack={()=>{onBtnClickHandlerForFilter ("NY")}}/>

            </div>
        </div>
    )
}







