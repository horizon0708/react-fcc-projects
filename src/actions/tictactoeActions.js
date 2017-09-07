
// example of a thunk using the redux-thunk middleware
export function takeSquare(squareId) {
  return {
      type: "TAKE_SQUARE",
      payload: squareId
  }
}

