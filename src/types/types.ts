export interface TodoInputGroup {
    addTodo: (input: string) => void
    

}

export interface todoListType {
    todos: string[]
    deleteTodo: (index: number) => void
    toggleModal: () => void
    setEditIndex: (index: number) => void
}


export interface editModalProps {
  toggleModal: () => void
  editTodo: (input: string) => void
}