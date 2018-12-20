
let initialState = {
    socialId: ""
  }

export default function(state = initialState, action){
    switch(action.type){
        case 'SOCIAL_ID':
            console.log('reducer...', action.payload)
            return Object.assign({}, state, { socialId: action.payload })

        case 'GET_SOCIAL_ID':
            return state.socialId

        default:
            return state;
    }
}