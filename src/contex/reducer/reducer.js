const reducer = (state, action) => {
    switch (action.type) {
        case "FIRED_USER": {
            return [...state, action.user]
        }
        default: {
            return state
        }
    }
}

export {reducer}