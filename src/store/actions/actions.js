import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_ITEM } from "./types"

export function addReminder(text, date) {
    return {
        type: ADD_REMINDER,
        text,
        date
    }
}

export function clearReminder() {
    return {
        type: CLEAR_REMINDER,
    }
}

export function removeItem(index) {
    return {
        type: REMOVE_ITEM,
        index
    }
}
