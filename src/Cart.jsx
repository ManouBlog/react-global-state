import { TodoContext } from "./context/MyTodoContext";
import { useContext } from "react";
const myStyle={
    position:"absolute",
    top:0,
    right:0,
    
}
function Cart() {
    const {state} = useContext(TodoContext)
  return (
    <div className='cart' style={myStyle}>
      <h2>Nbre</h2>
     <h1>{state.todos.length}</h1> 
    </div>
  )
}

export default Cart
