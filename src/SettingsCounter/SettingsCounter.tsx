import React, {ChangeEvent} from 'react';
import Btn from '../Buttons/Btn';

type settingsCounterPropsType = {
    maxValue: number
    minValue: number
    setNumber: () => void
    changeMaxValues: (numMax: number) => void
    changeMinValues: (numMin: number) => void
    setFocus: () => void
}

export const SettingsCounter: React.FC<settingsCounterPropsType> = ({
                                                                        maxValue,
                                                                        minValue,
                                                                        changeMaxValues,
                                                                        changeMinValues,
                                                                        setNumber,
                                                                        setFocus,
                                                                      }) => {


    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValues(+e.currentTarget.value)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMinValues(+e.currentTarget.value)
    }

    const setNumbers = () => {
        setNumber()
    }

    const focused = () => {
        setFocus()
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