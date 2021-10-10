import { ADD_REMINDER, CLEAR_REMINDER, REMOVE_ITEM } from "../actions/types"

export function reminderRed(state, action) {
    if (action.type === ADD_REMINDER) {
        return {
            reminders: [
                ...state.reminders,
                {
                    text: action.text,
                    date: action.date
                }
            ]
        }
    } else if (action.type === CLEAR_REMINDER) {
        return {
            reminders: []
        }
    } else if (action.type === REMOVE_ITEM) {
        const reminderArray = state.reminders;
        const newReminders = [];
        for (let i = 0; i < reminderArray.length; i += 1) {
            if (i !== action.index) {
                newReminders.push(reminderArray[i]);
            }
        }
        return {
            reminders: newReminders
        }
    } else {
        return state
    }
}