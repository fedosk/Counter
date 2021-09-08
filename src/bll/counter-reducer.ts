const INCREMENT = 'INCREMENT'
const RESET_VALUE = 'RESET_VALUE'
const SET_MAX_VALUE = 'SET_MAX_VALUE'
const SET_MIN_VALUE = 'SET_MIN_VALUE'
const SET_MIN_AND_MAX_VALUES = 'SET_MIN_AND_MAX_VALUES'
const SET_FOCUS = 'SET_FOCUS'

const initialState = {
    value: 0,
    maxValue: 5,
    minValue: 0,
    changeCounter: false,
    incBtnDislable: false,
    resetBtnDislable: true,
}

export type InitialStateType = typeof initialState

export const counterReducer = (state: InitialStateType = initialState, action: ActionType) : InitialStateType => {
    switch (action.type) {
        case INCREMENT: {
            return {
                ...state,
                value: (state.value < state.maxValue) ? state.value + 1 : state.value,
                resetBtnDislable: (state.value > state.maxValue),
                incBtnDislable: (state.value === state.maxValue),
            }
        }
        case RESET_VALUE: {
            return {
                ...state,
                value: state.minValue,
                incBtnDislable: false,
                resetBtnDislable: true,
            }
        }
        case SET_MAX_VALUE: {
            return {
                ...state,
                maxValue: action.maxValue,
                incBtnDislable: true,
                resetBtnDislable: true,
            }
        }
        case SET_MIN_VALUE: {
            return {
                ...state,
                minValue: action.minValue,
                incBtnDislable: true,
                resetBtnDislable: true,
            }
        }
        case SET_MIN_AND_MAX_VALUES: {
            return {
                ...state,
                value: state.minValue,
                incBtnDislable: false,
                changeCounter: false,
            }
        }
        case SET_FOCUS: {
            return {
                ...state,
                changeCounter: true,
            }
        }
        default:
            return state
    }
}

export type ActionType = ReturnType<typeof incremetValue>
    | ReturnType<typeof resetValue>
    | ReturnType<typeof setMaxValue>
    | ReturnType<typeof setMinValue>
    | ReturnType<typeof setMinAndMaxValues>
    | ReturnType<typeof setFucus>

export const incremetValue = () => ({type: INCREMENT} as const)
export const resetValue = () => ({type: RESET_VALUE} as const)
export const setMaxValue = (maxValue: number) => ({type: SET_MAX_VALUE, maxValue} as const)
export const setMinValue = (minValue: number) => ({type: SET_MIN_VALUE, minValue} as const)
export const setMinAndMaxValues = () => ({type: SET_MIN_AND_MAX_VALUES} as const)
export const setFucus = () => ({type: SET_FOCUS} as const)

