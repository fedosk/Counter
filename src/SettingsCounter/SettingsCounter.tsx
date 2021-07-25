import React, {ChangeEvent, useState} from 'react';
import Btn from '../Buttons/Btn';

type settingsCounterPropsType = {
    maxValue: number
    minValue: number
    inc: (num: number) => void
    setNumber: (numMin: number, numMax: number) => void
    changeMaxValues: (numMax: number) => void
    changeMinValues: (numMin: number) => void
    changeCuonter: boolean
    setFocus: (focus: boolean) => void
}

export const SettingsCounter: React.FC<settingsCounterPropsType> = ({
                                                                        maxValue,
                                                                        minValue,
                                                                        changeMaxValues,
                                                                        changeMinValues,
                                                                        setNumber,
                                                                        inc,
                                                                        changeCuonter,
                                                                        setFocus}) => {


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValues(+e.currentTarget.value)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMinValues(+e.currentTarget.value)
    }

    const setNumbers = () => {
        inc(minValue)
        setNumber(minValue, maxValue)
    }

    const focused = () => {
        setFocus(true)
    }

    return (
        <>
            <div className="counterContainer">
                <div className="counterWrapper">
                    <div>
                        <input
                            type="number"
                            value={maxValue}
                            onChange={changeMaxValue}
                            onFocus={focused}
                        />

                        <input
                            type="number"
                            value={minValue}
                            onChange={changeMinValue}
                            onFocus={focused}
                        />
                    </div>
                    <div className="btnWrapper">
                        <Btn
                            disabled={!changeCuonter}
                            onClick={setNumbers}
                        >Set</Btn>
                    </div>
                </div>
            </div>
        </>
    )
}