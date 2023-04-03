const initState = {
    login: {
        email: "",
    },
}
const rootReducer = (state = initState, action) => {
    console.log(state, action)
    switch (action.type) {
        case 'login/loginEmail':
            return {
                state,
                login: {
                    email: action.payLoad
                }
            };
        default:
            return state;
    }
}

export default rootReducer;