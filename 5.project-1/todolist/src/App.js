import {useState} from 'react'
import Input from './components/input';
import List from './components/list';
function App(){

  const [todos, setTodos] = useState([]);
  const [newTodos, setNewTodos] = useState();


  const addTodo =()=>{
    if(newTodos.trim() === '') return;
    setTodos([...todos, {id: Date.now(), text:newTodos}])
    setNewTodos("");
  }


  return(
    <>
      <Input newTodos={newTodos} setNewTodos={setNewTodos} addTodo={addTodo}/>
      <List todos={todos}/>
    </>

  )


}
export default App