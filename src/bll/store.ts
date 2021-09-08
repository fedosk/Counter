import {combineReducers, createStore} from "redux";
import {counterReducer} from "./counter-reducer";

const rootReducer = combineReducers({
    counter: counterReducer
})

const saveToLocalStorage = (state: AppRootStateType) => {
    try {
        localStorage.setItem('counter-state', JSON.stringify(state));
    } catch (e) {
        console.error(e);
    }
};


const loadFromLocalStorage = () => {
    try {
        const persistedTodosString = localStorage.getItem('counter-state');
        if (persistedTodosString) {
            return JSON.parse(persistedTodosString)
        }
    } catch (e) {
        console.error(e);
        return undefined;
    }
};

const preloadedState = loadFromLocalStorage();

/*let preloadedState
const persistedTodosString = localStorage.getItem('counter-state');
if (persistedTodosString) {
    preloadedState = JSON.parse(persistedTodosString)
}*/

export const store = createStore(rootReducer, preloadedState)

store.subscribe(() => {
    saveToLocalStorage(store.getState());
    //localStorage.setItem('counter-state', JSON.stringify(store.getState()));
});

export type AppStoreType = typeof store
export type AppRootStateType = ReturnType<typeof rootReducer>


// @ts-ignore
window.store = store;




