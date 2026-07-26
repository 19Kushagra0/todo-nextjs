'use client'

import styles from '@/styles/todo.module.css'
import type { todoListType } from '@/types/types'

export default function TodoList({ todos, deleteTodo, toggleModal, setEditIndex }: todoListType) {


    return (
        <ul className={styles.todoList}>
            {/* Example of an active task */}

            {todos.map((todo, index) => {
                return (
                    <li key={index} className={styles.todoItem}>
                        <div className={styles.todoContent}>
                            <input type="checkbox" className={styles.checkbox} />
                            <span className={styles.todoText}>{todo}</span>
                        </div>
                        <div className={styles.actions}>
                            <button onClick={() => {
                                setEditIndex(index)
                                toggleModal()
                            }} className={styles.editButton}>Edit</button>
                            <button onClick={() => { deleteTodo(index) }} className={styles.deleteButton}>Delete</button>
                        </div>
                    </li>
                )
            })}
        </ul>
    )
}
