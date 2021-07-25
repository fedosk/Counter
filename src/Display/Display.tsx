import React from 'react';

type displayPropsType = {
    value: number
    maxValue: number
    changeCuonter: boolean
}

export const Display: React.FC<displayPropsType> = ({
                                                        value,
                                                        maxValue,
                                                        changeCuonter,
                                                    }) => {
    if(!changeCuonter) {
        return (
            <div
                className={(value === maxValue) ? `maxCount counterDisplay` : 'counterDisplay'}>
                {value}
            </div>
        )
    }
    return (
        <div>
            enter values and press "set"
        </div>
    )
}