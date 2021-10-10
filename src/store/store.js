import { createStore } from "redux";
import { reminderRed } from "./reducers";

function loadState() {
    try {
        const state = window.localStorage.getItem('reminders');
        if (state !== null) {
            return JSON.parse(state);
        }
    } catch(error) {
        console.error(error);
    }
    return {
        reminders: []
    }
}

function saveState(state) {
    const compresedState = JSON.stringify(state);
    window.localStorage.setItem("reminders", compresedState);
}

const store = createStore(reminderRed, loadState());

store.subscribe(() => {
    saveState(store.getState());
})

export default store;