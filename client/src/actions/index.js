
export function storeSocialId(id) {
    console.log('action...', id)
    return (dispatch) => {
        dispatch({
            type: 'SOCIAL_ID',
            payload: id
        })
    }
}

export function getSocialId(){
    return dispatch => {
        dispatch ({
            type: 'GET_SOCIAL_ID'
        })
    }
}