"use client"

import TodoInputGroup from '@/components/TodoInputGroup'
import TodoList from '@/components/TodoList'
import { useState } from 'react'


export default function TodoApp() {
    const [todos, setTodos] = useState<string[]>([])

    const addTodo = (input: string) => {
        console.log(input);

        const copyData = [...todos]
        copyData.push(input)
        setTodos(copyData)
    }


    return (
        <>

            <TodoInputGroup addTodo={addTodo} />
            <TodoList todos={todos} />

        </>
    )
}
