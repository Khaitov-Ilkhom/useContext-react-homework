import AppContext from "../store/index.jsx";
import {useReducer} from "react";
import {initialState, reducer} from "../reducer/reducer.js";

const AppProvider = ({children}) => {
    return (
        <div>
            <AppContext.Provider value={useReducer(reducer, initialState)}>
                {children}
            </AppContext.Provider>
        </div>
    )
}
export default AppProvider
