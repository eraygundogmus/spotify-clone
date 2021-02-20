export const initialState = {
    user: null,
    playlist: [],
    playing: false,
    item: null,
/*     token: 'BQBpNOFCJVypf6xb_6paILOpJOt8UjEuRo6FB2bAaiZ2KBgfNPGhIt_BgV7vIGW--oKjJ-LMhXfIHDu9rt9o0OevKjSlHFcUtp7QLmAyd-cGpy6HYcq3ZY-aLRHft3PRVF99GyO0TjcDuVacqHQ-FW781wdWSw' */
}

const reducer = (state, action) => {

console.log(action);
    switch(action.type) {
        case "SET_USER":
            return {
                ...state,
                user: action.user,
            };
        
        case 'SET_TOKEN' :
            return {
                ...state,
                token: action.token
            };

        case 'SET_PLAYLISTS' :
            return {
                ...state,
                playlists: action.playlists,
            };
        case 'SET_GENERIC' :
            return {
                ...state,
                generic : action.generic
            };
        case 'FEATURED_PLAYLISTS' :
            return {
                ...state,
                featureds: action.featureds,
            }
        default:
            return state;
    }
}

export default reducer;