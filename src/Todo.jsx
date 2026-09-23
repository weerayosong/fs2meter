import { useState } from "react";
import TodoItem from "./TodoItem";

export default function Todo() {
    // State for the input field
    const [text, setText] = useState("");

    // State for the list of items
    const [todos, setTodos] = useState([]);

    // Function to add a new todo item
    const addTodo = () => {
        // Prevent adding empty tasks
        if (!text.trim()) return;

        // Create a new todo object and append it to the existing array
        const newTodo = {
            id: Date.now(),
            text: text,
            done: false,
        };
        console.log(Date.now());

        setTodos([...todos, newTodo]);

        // Clear the input field after adding
        setText("");
    };
    console.log(todos);

    // Function to toggle the completion status
    const toggleTodo = (id) => {
        setTodos(
            todos.map((todo) =>
                todo.id === id ? { ...todo, done: !todo.done } : todo,
            ),
        );
    };

    // Function to remove an item from the list
    const removeTodo = (id) => {
        setTodos(todos.filter((todo) => todo.id !== id));
    };

    // Calculate remaining incomplete tasks
    const remainingTasks = todos.filter((todo) => !todo.done).length;

    return (
        <div
            style={{
                maxWidth: "400px",
                margin: "0 auto",
                fontFamily: "sans-serif",
            }}
        >
            <h2>My Todos</h2>
            <p>{remainingTasks} tasks left</p>

            <div style={{ marginBottom: "16px" }}>
                <input
                    type="text"
                    value={text}
                    onChange={(e) => setText(e.target.value)}
                    placeholder="Add a task..."
                    style={{ padding: "8px", marginRight: "8px" }}
                />
                <button onClick={addTodo} style={{ padding: "8px 16px" }}>
                    Add
                </button>
            </div>

            <ul style={{ listStyleType: "none", padding: 0 }}>
                {todos.map((todo) => (
                    <TodoItem
                        key={todo.id}
                        todo={todo}
                        onToggle={toggleTodo}
                        onDelete={removeTodo}
                    />
                ))}
            </ul>
        </div>
    );
}
