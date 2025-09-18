function Input({ newTodos, setNewTodos, addTodo }) {
    return (
        <div className='Main-cnt'>
            <div className='input-cnt'>
                <input type="text" placeholder="Enter here.........." value={newTodos} onChange={(e) => setNewTodos(e.target.value)} />
                <button onClick={addTodo}>Add</button>
            </div> 
        </div>

    )

}

export default Input