
export function storeSocialId(id) {
    console.log('action...', id)
    return (dispatch) => {
        dispatch({
            type: 'SOCIAL_ID',
            payload: id
        })
    }
}