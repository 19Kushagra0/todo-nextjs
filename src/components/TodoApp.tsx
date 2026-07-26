"use client"

import TodoInputGroup from '@/components/TodoInputGroup'
import TodoList from '@/components/TodoList'


export default function TodoApp() {
    const addTodo = (input: string) => {
        console.log(input);
    }


    return (
        <>

            <TodoInputGroup addTodo={addTodo} />
            <TodoList />

        </>
    )
}
