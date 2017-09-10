import * as types from '../constants/actionTypes';

import { generateSequence } from '../components/simon-games/Logic';

export default function simonReducer(state = initialState, action) {
    switch (action.type) {
        case types.TOGGLE_STRICT:
            return { ...state, strict: !state.strict };

        case types.TOGGLE_INSTRUCTION:
            return { ...state, instructionPlaying: !state.instructionPlaying };

        case types.NEXT_LEVEL:
            return { ...state, level: state.level + 1 };
            
        case types.CUSTOM_MESSAGE:
            return {...state, message: action.payload };

        case types.EVALUATE_PRESS:
            const { sequence, level, current } = state;   
            const input = action.payload;
            let newState = {...state};
            
            if(sequence[current] === input){
                newState = {...newState, current: current + 1, message: "CORRECT" };
                if(newState.current === level){
                    newState = {...newState, level: level + 1 , current: 0, message: "NEXT LEVEL!" };
                    if(newState.level === 20) {
                        return {...newState, 
                                    level: 1, 
                                    current:0, 
                                    on: false,  
                                    message: "GAME WIN!",
                                    sequence: generateSequence()}
                    }
                }
                return newState;
            }  
            if (state.strict){
                // turn off with new sequence
                newState = {...newState, level: 1, current: 0, on: false,  message: "GAME OVER!", sequence: generateSequence()};
                return newState;
            }
            newState ={...newState, current:0, message: "TRY AGAIN" };
            return newState;
        
        case types.RESTART_GAME:
            
            return {...state, level:1, current:0 ,sequence: generateSequence()};
        
        default:
            return state;
            }
    }

    const initialState = {
        strict: false,
        on: false,
        instructionPlaying: false,
        current: 0,
        level: 1,
        message: '',
        sequence: generateSequence()
    };
