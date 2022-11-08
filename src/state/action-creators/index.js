export const addUserCount = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'add',
            payload: user
        })
    }
}

export const deleteUserCount = (user) => {
    return (dispatch) => {
        dispatch({
            type: 'delete',
            payload: user
        })
    }
}