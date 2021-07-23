import React from 'react';

type displayPropsType = {
    value: number
    maxValue: number
}

export const Display: React.FC<displayPropsType> = ({value, maxValue}) => {
    return (
        <div
            className={(value === maxValue) ? `maxCount counterDisplay` : 'counterDisplay'}>
            {value}
        </div>
    )
}