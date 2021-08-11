import React from 'react';

type displayPropsType = {
    value: number
    maxValue: number
    minValue: number
    changeCuonter: boolean
}

export const Display: React.FC<displayPropsType> = ({
                                                        value,
                                                        maxValue,
                                                        minValue,
                                                        changeCuonter,
                                                    }) => {
    let displayText
    if (maxValue < minValue || maxValue < 0 || minValue < 0 || maxValue === minValue) {
        displayText = 'Incorrect value!'
    } else {
        displayText = 'enter values and press "set"'
    }

    if(!changeCuonter) {
        return (
            <div className={(value === maxValue) ? `maxCount counterDisplay` : 'counterDisplay'}>
                {value}
            </div>
        )
    } else {
        return (
            <div className={(maxValue < minValue || maxValue < 0 || minValue < 0 || maxValue === minValue) ? 'errorSetValue' : 'setValue'}>
                {displayText}
            </div>
        )
    }

}