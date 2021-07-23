import React, {useState} from 'react';
import Btn from './Buttons/Btn'
import {Display} from './Display/Display';

type counterPropsType = {
    value: number
    maxValue: number
    minValue: number
    inc: (num: number) => void
    reset: (num: number) => void
}

export const Counter = (props: counterPropsType) => {

    const [incDis, setIncDis] = useState<boolean>(false)
    const [resetDis, setResetDis] = useState<boolean>(true)

    const inc = () => {
        setResetDis(false)
        if (props.value < props.maxValue) {
            props.inc(props.value + 1)
        } else {
            setIncDis(true)
        }
    }

    const reset = () => {
        setIncDis(false)
        setResetDis(true)
        props.reset(props.minValue)
    }

    return (
        <>
            <div className="counterContainer">
                <div className="counterWrapper">
                    <Display
                        value={props.value}
                        maxValue={props.maxValue}
                    />
                    <div className="btnWrapper">
                        <Btn
                            disabled={incDis}
                            onClick={inc}
                        >Inc</Btn>
                        <Btn
                            disabled={resetDis}
                            onClick={reset}
                        >Reset</Btn>
                    </div>
                </div>
            </div>
        </>
    )
}

