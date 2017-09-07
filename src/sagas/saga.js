import { put, takeEvery } from 'redux-saga/effects'


function* aiMove(action){
    try{

        yield put({type:"AI MOVE SUCCEDED"})
    } catch (e){
        yield put({type:"AI MOVE FAILED", message: e.message});
    }
}

/*
  Starts fetchUser on each dispatched `USER_FETCH_REQUESTED` action.
  Allows concurrent fetches of user.
*/
function* mySaga() {
  yield takeEvery("USER_FETCH_REQUESTED", aiMove);
}

/*
  Alternatively you may use takeLatest.

  Does not allow concurrent fetches of user. If "USER_FETCH_REQUESTED" gets
  dispatched while a fetch is already pending, that pending fetch is cancelled
  and only the latest one will be run.
*/


export default mySaga;