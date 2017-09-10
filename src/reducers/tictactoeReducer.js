

export default function tictactoeReducer(state = initialState, action) {
    switch (action.type) {
        case "TAKE_SQUARE":
            const squareId  = action.payload;
            return { ...state, 
                boardState:{
                    ...state.boardState,
                    [squareId] : state.turn
                }, 
                turn: state.turn === 1 ? 2 : 1};

        case "RESET_BOARD":
            return {
                ...state,
                boardState: {
                    ...initialState.boardState
                }
            };

        default:
            return state;
            }
    }

    const initialState = {
        boardState : {
            1 : 0,
            2 : 0, 
            3 : 0,
            4 : 0,
            5 : 0,
            6 : 0,
            7 : 0,
            8 : 0, 
            9 : 0
        },
        turn: 1
    };
