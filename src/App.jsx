// import React from "react";
// import Map from "./MyMap"
import { TodoProvider } from "./context/MyTodoContext";
import ShowTodo from "./ShowTodo";
// import MyUseReducer from "./useReducer/MyUseReducer";
import Cart from "./Cart"

// const todosInitialState = {
//   todos:[
//     {id:1,text:"hey"},
//     {id:2,text:"Moqui"}
//   ]
// };

// function todosReducer(state,action) {
//   switch (action.type) {
//     default:
//       return todosInitialState;
//   }
// }
// export const TodoContext = React.createContext()

// export const PrettyButton = (props) => {
//   const { updateCount,count } = props;
//   return (
//     <button onClick={updateCount}>This was clicked {count} of times</button>
//   );
// }; 
// const LikesComponents = ({counterNumber,setCounterNumber}) => {
//   const [likeState, setLikeState] = useState("haven't yet liked");
//   const hetli = useCallback(() => {
//     if (likeState === "liked") {
//       setCounterNumber(counterNumber++);
//     } else {
//       setCounterNumber(counterNumber - 1);
//     }
//   },[likeState])
//   useEffect(()=>{
//     hetli()
//   },[]);
//   return (
//     <div>
//       <p>you {likeState} this post</p>
//       <button onClick={()=>{
//         setLikeState("liked")}}>here to check</button>
//     </div>
//   );
// };

function App() {
  // const [counter, setCounter] = useState(0);
  // const [counterNumber, setCounterNumber] = useState(1);

  // const handleClick = () => {
  //   setCounter(counter + 1);
  // };
  // const [state,dispatch]=useReducer(todosReducer,todosInitialState)

  return (
    <TodoProvider>
      <ShowTodo />
      {/* <MyUseReducer /> */}
      <Cart />
    </TodoProvider>
    // <div>
     
    //   {/* <PrettyButton count={counter} updateCount={handleClick} />
    //   <LikesComponents
    //     counterNumber={counterNumber}
    //     setCounterNumber={setCounterNumber}
    //   />
    //   <Map /> */}
      
    // </div>
  );
}
export default App;
