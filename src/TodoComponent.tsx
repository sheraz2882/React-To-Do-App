import React from 'react';
import { useState } from 'react';

interface Todo {
    id: number;
    text: string;
    completed: boolean;
}
interface TodoComponentProps {
    todo: Todo;
    onToggle: (id: number) => void;
    onDelete: (id: number) => void;
}

const TodoComponent: React.FC<TodoComponentProps> = ({ todo, onToggle, onDelete }) => {
    return (
        <div className="todo-item">
            <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => onToggle(todo.id)}
            />
            <span style={{ textDecoration: todo.completed ? 'line-through' : 'none' }}>
                {todo.text}
            </span>
            <button onClick={() => onDelete(todo.id)}>Delete</button>
        </div>
    );
}

export default TodoComponent;