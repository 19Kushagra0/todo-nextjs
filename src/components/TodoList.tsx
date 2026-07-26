'use client'

import styles from '@/styles/todo.module.css'
import { useState } from 'react'
export default function TodoList() {


    return (
        <ul className={styles.todoList}>





            {/* Example of an active task */}


            <li className={styles.todoItem}>
                <div className={styles.todoContent}>
                    <input type="checkbox" className={styles.checkbox} />
                    <span className={styles.todoText}>Design premium UI</span>
                </div>
                <div className={styles.actions}>
                    <button className={styles.editButton}>Edit</button>
                    <button className={styles.deleteButton}>Delete</button>
                </div>
            </li>




        </ul>
    )
}
