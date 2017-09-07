

export default function twitchReducer(state = initialState, action) {
    switch (action.type) {
        case "GET_STREAMS":
            console.log('reducer called');
            return { ...state, 
                streamInfo: action.payload
            }

        case "GET_USERINFOS":
            return {
                ...state,
                userInfo: action.payload
            }

        default:
            return state;
            }
    }

    const initialState = {
        favourites : [
            "_ werds", 
            "gawjasef", 
            "OGN_LoL",
            "ESL_SC2", 
            "OgamingSC2", 
            "cretetion",
            "freecodecamp", 
            "storbeck", 
            "habathcx", 
            "RobotCaleb",
            "noobs2ninjas"
        ],
        streamInfo: [],
        userInfo: []
    }
