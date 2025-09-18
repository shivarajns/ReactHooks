function List({todos}) {
    return (
        <div className='list-cnt'>
            <ul>
                {
                    todos.map((task) => {
                        return <li key={task.id}>{task.text}</li>
                    })
                }
            </ul>
        </div>
    )
}

export default List