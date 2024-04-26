import { TodoContext } from "./context/MyTodoContext";
import { useContext, useState } from "react";
import uuid from "uuid-random";
function ShowTodo() {
  const { state, dispatch } = useContext(TodoContext);
  const [texte, setTexte] = useState("");
  const [modif, setModif] = useState({});
  const [showWindow, setshowWindow] = useState(false);
  const addElement = () => {
    const newTodo = {
      id: uuid(),
      text: texte,
    };
    const isTextExist = state.todos.some(item=>item.text === texte)
      if(!isTextExist){
        dispatch({ type: "Add", payload: newTodo });
        setTexte("")
      }else{
        alert("le texte existe")
      }
    console.log("newTodo", newTodo);
    
    
  };
  const getDetail = (todo) => {
    console.log("todo", todo);
    setModif(todo);
    setshowWindow(true);
  };
  return (
    <div style={{width:"100%",textAlign:"center"}}>
      {showWindow && (
        <div
          style={{
            position: "fixed",
            background: "black",
            zIndex: "999",
            display: "flex",
            placeItems: "top",
            justifyContent: "center",
            height: "100%",
            width: "100%",
          }}
        >
          <div style={{ width: "100%" }}>
            <input
              type="text"
              defaultValue={modif.text}
              onChange={(e) => setModif({ ...modif, text: e.target.value })}
              style={{ width: "60%", margin: "0 1em" }}
            />
            <button
              onClick={() => {
                if(!modif.text){
                  alert("le texte est requis.")
                }else{
                  dispatch({
                    type: "edit",
                    payload: { ...modif, text: modif.text },
                  });
                  setshowWindow(false);
                }
               
              }}
            >
              Confirmer
            </button>
            <button
              style={{ background: "red", margin: "0 1em" }}
              onClick={() => setshowWindow(false)}
            >
              Fermer
            </button>
          </div>
        </div>
      )}

      <h1 style={{textAlign:"center"}}>TodoList</h1>

      <div style={{margin:"1em"}}>
        <label htmlFor="texte">Tache : </label>
        <input
        id="texte"
          type="text"
          value={texte}
          onChange={(e) => setTexte(e.target.value)}
        />
      </div>
      <div
        style={{
          margin: "2em",
        }}
      >
        <button
        
          onClick={() => {
            if(!texte){
                alert("ajouter un texte")
            }else{
                addElement();
            }
            
          }}
        >
          Add
        </button>
        <button 
        style={{
            margin: "0 2em",
            background:"orange"
          }}
        onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
      {state.todos.map((todo) => (
        <div key={todo.id} style={{
            margin: "2em 0",
          }} >
          <span>{todo.text}</span>
          <button
          style={{
            margin: "0 2em",
          }}
            className="bg-danger"
            onClick={() => {
              getDetail(todo);
            }}
          >
            Modifier
          </button>
          <button
            className="bg-danger"
            style={{
               
                background:"red"
              }}
            onClick={() => dispatch({ type: "delete", payload: todo })}
          >
            Delete
          </button>
        </div>
      ))}
      {!state.todos.length && <p>lISTE VIDE</p>}
      
    </div>
  );
}

export default ShowTodo;
