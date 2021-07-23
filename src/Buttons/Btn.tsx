import React from 'react';

type btnPropsType = {
    onClick: () => void
    disabled: boolean
}

const Btn: React.FC<btnPropsType> = ({disabled, ...restProps}) =>{
    return (
        <button
            disabled={disabled}
            {...restProps}
        />
    )
}

export default Btn