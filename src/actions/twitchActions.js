// example of a thunk using the redux-thunk middleware
import axios from 'axios';

export function getStreams(name) {
    return dispatch=>{
        axios.get(`https://wind-bow.gomix.me/twitch-api/streams/${name}?callback=?`)
        .then(res=>{
            dispatch({type:"GET_STREAMS", payload: res.data});
        }).catch(e=>{
            console.log(e);
        })
    }
  }
  
  export function getUserInfos(){
    return{
      type: "GET_USERINFOs"
    }
  }