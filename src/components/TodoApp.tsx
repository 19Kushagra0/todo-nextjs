"use client"

import TodoInputGroup from '@/components/TodoInputGroup'
import TodoList from '@/components/TodoList'
import EditModal from './EditModal'
import { useState } from 'react'


export default function TodoApp() {
    const [todos, setTodos] = useState<string[]>([])

    const addTodo = (input: string) => {
        console.log(input);

        const copyData = [...todos]
        copyData.push(input)
        setTodos(copyData)
    }

    const deleteTodo = (index: number) => {
        console.log("delete");

        const deleteTodo = todos.filter((el, i) => {
            return i !== index
        })
        setTodos(deleteTodo)
    }

    const [showModal, setShowModal] = useState(false);
    const [editIndex, setEditIndex] = useState<number | null>(null)
    const toggleModal = () => {
        setShowModal(!showModal);
    };

    const editTodo = (input: string) => {

        const editedTodo = todos.map((el, index) => {
            if (index === editIndex) {
                return input
            }
            return el
        })
        setTodos(editedTodo)
    }

    return (
        <>

            <TodoInputGroup addTodo={addTodo} />
            <TodoList todos={todos} deleteTodo={deleteTodo} toggleModal={toggleModal} setEditIndex={setEditIndex} />
            {showModal ? <EditModal toggleModal={toggleModal} editTodo={editTodo} /> : null}

        </>
    )
}
