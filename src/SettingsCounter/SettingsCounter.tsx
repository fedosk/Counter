import React, {ChangeEvent} from 'react';
import Btn from '../Buttons/Btn';

type settingsCounterPropsType = {
    maxValue: number
    minValue: number
    inc: (num: number) => void
    setNumber: (numMin: number, numMax: number) => void
    changeMaxValues: (numMax: number) => void
    changeMinValues: (numMin: number) => void
}

export const SettingsCounter: React.FC<settingsCounterPropsType> = ({
                                                                        maxValue,
                                                                        minValue,
                                                                        changeMaxValues,
                                                                        changeMinValues,
                                                                        setNumber,
                                                                        inc}) => {

    const changeMaxValue = (e: ChangeEvent<HTMLInputElement>) => {
        changeMaxValues(+e.currentTarget.value)
    }

    const changeMinValue = (e: ChangeEvent<HTMLInputElement>) => {
        inc(+e.currentTarget.value)
        changeMinValues(+e.currentTarget.value)
    }

    const setNumbers = () => {
        setNumber( minValue, maxValue)
    }

    return (
        <>
            <div className="counterContainer">
                <div className="counterWrapper">
                    <div>
                        <input
                            type="number"
                            value={maxValue}
                            onChange={changeMaxValue}/>
                        <input
                            type="number"
                            value={minValue}
                            onChange={changeMinValue}
                        />
                    </div>
                    <div className="btnWrapper">
                        <Btn
                            disabled={false}
                            onClick={setNumbers}
                        >Set</Btn>
                    </div>
                </div>
            </div>
        </>
    )
}