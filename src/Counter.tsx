import React from 'react';
import Btn from './Buttons/Btn'
import {Display} from './Display/Display';

type counterPropsType = {
    value: number
    maxValue: number
    minValue: number
    inc: () => void
    reset: () => void
    changeCuonter: boolean
    incDis: boolean
    resetDis: boolean
}

export const Counter = (props: counterPropsType) => {

    const inc = () => {
        props.inc()
    }

    const reset = () => {
        props.reset()
    }

    return (
        <>
            <div className="counterContainer">
                <div className="counterWrapper">
                    <Display
                        value={props.value}
                        maxValue={props.maxValue}
                        minValue={props.minValue}
                        changeCuonter={props.changeCuonter}
                    />
                    <div className="btnWrapper">
                        <Btn
                            disabled={props.incDis || props.value === props.maxValue}
                            onClick={inc}
                        >Inc</Btn>
                        <Btn
                            disabled={props.resetDis}
                            onClick={reset}
                        >Reset</Btn>
                    </div>
                </div>
            </div>
        </>
    )
}

