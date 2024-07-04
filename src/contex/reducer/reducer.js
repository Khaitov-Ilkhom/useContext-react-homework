import {saveLoaclstorage} from "../../save-to-localstorage/save-loaclstorage.js";

const initialState = JSON.parse(localStorage.getItem("User")) || []

const reducer = (state, action) => {
    switch (action.type) {
        case "FIRED_USER": {
            const newState = [...state, action.user]
            saveLoaclstorage("User", newState)
            return newState
        }
        case "REMOVE_USER": {
            const newState = state.filter(user => user.id !== action.id)
            saveLoaclstorage("User", newState)
            return newState
        }
        default: {
            return state
        }
    }
}

export {reducer, initialState}