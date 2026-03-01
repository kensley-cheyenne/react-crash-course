import './Todo.css';

function Todo({ title, onDelete }) {
    return (
        <div className="todo">
            <p>{title}</p>
            <button onClick={onDelete}>Delete</button>
        </div>
    )
}
export default Todo;