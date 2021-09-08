import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';
import {
    incremetValue,
    InitialStateType,
    resetValue, setFucus,
    setMaxValue,
    setMinAndMaxValues,
    setMinValue
} from "./bll/counter-reducer";
import {AppRootStateType, AppStoreType, store} from "./bll/store";
import {useDispatch, useSelector} from "react-redux";

function App() {

    /*useEffect(() => {
        let minNum = localStorage.getItem("MinValue")
        let maxNum = localStorage.getItem("MaxValue")
        if(minNum && maxNum) {
            let storMinNum = JSON.parse(minNum)
            let storMaxNum = JSON.parse(maxNum)
            setMinValue(storMinNum)
            setValue(storMinNum)
            setMaxValue(storMaxNum)
            if (storMinNum >= storMaxNum) {
                setChangeCounter(true)
            }
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("MaxValue", JSON.stringify(maxValue))
        localStorage.setItem("MinValue", JSON.stringify(minValue))
    }, [maxValue, minValue])*/

    const value = useSelector<AppRootStateType, number>(state => state.counter.value)
    const maxValue = useSelector<AppRootStateType, number>(state => state.counter.maxValue)
    const minValue = useSelector<AppRootStateType, number>(state => state.counter.minValue)
    const changeCuonter = useSelector<AppRootStateType, boolean>(state => state.counter.changeCounter)
    const incDis = useSelector<AppRootStateType, boolean>(state => state.counter.incBtnDislable)
    const resetDis = useSelector<AppRootStateType, boolean>(state => state.counter.resetBtnDislable)

    const dispatch = useDispatch()

    const inc = () => {
        dispatch(incremetValue())
    }

    const reset = () => {
        dispatch(resetValue())
    }

    const changeMaxValues = (numMax: number) => {
        dispatch(setMaxValue(numMax))
    }

    const changeMinValues = (numMin: number) => {
        dispatch(setMinValue(numMin))
    }

    const setNumber = () => {
        dispatch(setMinAndMaxValues())
    }

    const setFocus = () => {
        dispatch(setFucus())
    }

    return (
        <div className="App">
            <SettingsCounter
                maxValue={maxValue}
                minValue={minValue}
                setNumber={setNumber}
                changeMaxValues={changeMaxValues}
                changeMinValues={changeMinValues}
                setFocus={setFocus}
            />
            <Counter
                value={value}
                maxValue={maxValue}
                minValue={minValue}
                changeCuonter={changeCuonter}
                incDis={incDis}
                resetDis={resetDis}
                inc={inc}
                reset={reset}
            />
        </div>
    );
}

export default App;
