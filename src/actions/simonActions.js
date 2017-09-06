import * as types from '../constants/actionTypes';

// example of a thunk using the redux-thunk middleware
export function toggleStrict() {
  return {
      type: types.TOGGLE_STRICT
  }
}

export function toggleInstruction() {
  return {
      type: types.TOGGLE_INSTRUCTION
  }
}

export function nextLevel(){
  return {
    type: types.NEXT_LEVEL
  }
}

export function gameStart(){
  return{
    type: types.GAME_START
  }
}

export function increaseCurrent(){
  return{
    type: types.INCREASE_CURRENT
  }
}
export function resetCurrent(){
  return{
    type: types.RESET_CURRENT
  }
}

export function customMessage(message){
  return {
    type: types.CUSTOM_MESSAGE,
    payload: message
  }
}

export function evaluatePress(seqID){
  return{
    type: types.EVALUATE_PRESS,
    payload: seqID
  }
}