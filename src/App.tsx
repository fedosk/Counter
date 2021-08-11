import React, {useEffect, useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';

function App() {
    const [value, setValue] = useState<number>( 0)
    const [maxValue, setMaxValue] = useState<number>( 5)
    const [minValue, setMinValue] = useState<number>( 0)
    const [changeCuonter, setChangeCounter]  = useState<boolean>(false)
    const [incDis, setIncDis] = useState<boolean>(false)
    const [resetDis, setResetDis] = useState<boolean>(true)

    useEffect(() => {
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
    }, [maxValue, minValue])

    const inc = (num: number) => {
        setValue(num)
    }

    const reset = (num: number) => {
        setValue(num)
    }

    const setNumber = (numMin: number, numMax: number) => {
        setChangeCounter(false)
        setMaxValue(numMax)
        setMinValue(numMin)
    }

    const changeMaxValues = (numMax: number) => {
        setMaxValue(numMax)
    }

    const changeMinValues = (numMin: number) => {
        setMinValue(numMin)
    }

    const setFocus = (focus: boolean) => {
        setChangeCounter(focus)
    }

    const changeIncBtn = (dis: boolean) => {
        setIncDis(dis)
    }

    const changeResetBtn = (dis: boolean) => {
        setResetDis(dis)
    }

    return (
        <div className="App">
            <SettingsCounter
                inc={inc}
                maxValue={maxValue}
                minValue={minValue}
                setNumber={setNumber}
                changeMaxValues={changeMaxValues}
                changeMinValues={changeMinValues}
                changeCuonter={changeCuonter}
                setFocus={setFocus}
                changeIncBtn={changeIncBtn}
                changeResetBtn={changeResetBtn}
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
                changeIncBtn={changeIncBtn}
                changeResetBtn={changeResetBtn}
            />
        </div>
    );
}

export default App;
