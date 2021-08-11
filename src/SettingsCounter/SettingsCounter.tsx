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
    changeResetBtn: (dis: boolean) => void
    changeIncBtn: (dis: boolean) => void
}

export const SettingsCounter: React.FC<settingsCounterPropsType> = ({
                                                                        maxValue,
                                                                        minValue,
                                                                        changeMaxValues,
                                                                        changeMinValues,
                                                                        setNumber,
                                                                        inc,
                                                                        setFocus,
                                                                        changeResetBtn,
                                                                        changeIncBtn}) => {


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValues(+e.currentTarget.value)
        changeIncBtn(true)
        changeResetBtn(true)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMinValues(+e.currentTarget.value)
        changeIncBtn(true)
        changeResetBtn(true)
    }

    const setNumbers = () => {
        inc(minValue)
        setNumber(minValue, maxValue)
        changeIncBtn(false)
    }

    const focused = () => {
        setFocus(true)
    }

    return (
        <>
            <div className="counterContainer">
                <div className="counterWrapper">
                    <div className={'displaySetWrapper'}>

                        <div className={'textWrapper'}>
                            <span className={'setValueSpan'}>max value:</span>
                            <span className={'setValueSpan'}>min value:</span>
                        </div>

                        <div className={'inputWrapper'}>
                            <input
                                className={(maxValue < minValue || maxValue < 0 || minValue < 0 || maxValue === minValue) ? 'errorInput' : 'input'}
                                type="number"
                                value={maxValue}
                                onChange={changeMaxValue}
                                onFocus={focused}/>

                            <input
                                className={(maxValue < minValue || maxValue < 0 || minValue < 0 || maxValue === minValue) ? 'errorInput' : 'input'}
                                type="number"
                                value={minValue}
                                onChange={changeMinValue}
                                onFocus={focused}/>
                        </div>
                    </div>
                    <div className="btnWrapper">
                        <Btn
                            disabled={(maxValue < minValue || maxValue < 0 || minValue < 0 || maxValue === minValue)}
                            onClick={setNumbers}>Set
                        </Btn>
                    </div>
                </div>
            </div>
        </>
    )
}