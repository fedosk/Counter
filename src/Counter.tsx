import React from 'react';
import Btn from './Buttons/Btn'
import {Display} from './Display/Display';

type counterPropsType = {
    value: number
    maxValue: number
    minValue: number
    inc: (num: number) => void
    reset: (num: number) => void
    changeCuonter: boolean
    incDis: boolean
    resetDis: boolean
    changeResetBtn: (dis: boolean) => void
    changeIncBtn: (dis: boolean) => void
}

export const Counter = (props: counterPropsType) => {

    const inc = () => {
        props.changeResetBtn(false)
        if (props.value < props.maxValue) {
            props.inc(props.value + 1)
        } else {
            props.changeIncBtn(true)
        }
    }

    const reset = () => {
        props.changeIncBtn(false)
        props.changeResetBtn(true)
        props.reset(props.minValue)
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

