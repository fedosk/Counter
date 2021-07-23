import React, {useState} from 'react';
import './App.css';
import {Counter} from './Counter';
import {SettingsCounter} from './SettingsCounter/SettingsCounter';

function App() {

    const [value, setValue] = useState<number>( 0)
    const [maxValue, setMaxValue] = useState<number>( 0)
    const [minValue, setMinValue] = useState<number>( 0)

    const inc = (num: number) => {
        setValue(num)
    }

    const reset = (num: number) => {
        setValue(num)
    }

    const setNumber = (numMin: number, numMax: number) => {
        setMaxValue(numMax)
        setMinValue(numMin)
    }

    const changeMaxValues = (numMax: number) => {
        setMaxValue(numMax)
    }

    const changeMinValues = (numMin: number) => {
        setMinValue(numMin)
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
            />
            <Counter
                value={value}
                maxValue={maxValue}
                minValue={minValue}
                inc={inc}
                reset={reset}
            />
        </div>
    );
}

export default App;
