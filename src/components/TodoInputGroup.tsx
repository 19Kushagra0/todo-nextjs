"use client"

import styles from '@/styles/todo.module.css'
import { useState } from 'react'
import type { TodoInputGroup } from '@/types/types'

export default function TodoInputGroup({ addTodo }: TodoInputGroup) {
    const [input, setInput] = useState('')

    return (
        <div className={styles.inputGroup}>
            <input
                type="text"
                className={styles.input}
                placeholder="What needs to be done?"
                value={input}
                onChange={(e) => { setInput(e.target.value) }}
            />
            <button
                onClick={() => {
                    addTodo(input)
                    setInput('')
                }}
                className={styles.addButton}>
                Add Task
            </button>
        </div>
    )
}
