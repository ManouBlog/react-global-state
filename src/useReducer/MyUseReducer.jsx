import {useReducer} from 'react'
const initalState = {
    count: 0,
  };
  
  function Myreducer(state, action) {
    switch (action.type) {
      case "increment":
        return { count: state.count + 1 };
      case "decrement":
        return { count: state.count - 1 };
      default:
        return initalState;
    }
  }
function MyUseReducer() {
    const [blovl,dispatch]=useReducer(Myreducer,initalState)
  return (
    <div>
      <p>{blovl.count}</p>
      <button onClick={()=>{
        dispatch({type:'increment'})
      }}>incrementer</button>
      <button onClick={()=>{
        dispatch({type:'reset'})
      }}>reset</button>
    </div>
  )
}

export default MyUseReducer
