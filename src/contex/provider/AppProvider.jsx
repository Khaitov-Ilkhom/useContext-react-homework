import AppContext from "../store/index.jsx";
import {useReducer} from "react";
import {reducer} from "../reducer/reducer.js";

const AppProvider = ({children}) => {
    return (
        <div>
            <AppContext.Provider value={useReducer(reducer, [])}>
                {children}
            </AppContext.Provider>
        </div>
    )
}
export default AppProvider
