export default function TodoItem({ todo, onToggle, onDelete }) {
    return (
        <li style={{ marginBottom: "8px" }}>
            <span
                onClick={() => onToggle(todo.id)}
                style={{
                    cursor: "pointer",
                    textDecoration: todo.done ? "line-through" : "none",
                    marginRight: "12px",
                }}
            >
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </li>
    );
}
