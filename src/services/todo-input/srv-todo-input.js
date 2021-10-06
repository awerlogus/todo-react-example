import { startTodoInput } from 'models/mdl-todo-input'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-input/alg-todo-input').TodoInputAlgebra} TodoInputAlgebra */

// SECTION Queries

/** @type {(P: TodoInputAlgebra) => () => boolean} */
export const todoInputEmpty = P => () => P.getTodoInput() === startTodoInput

// SECTION Commands

/** @type {(P: TodoInputAlgebra) => () => void} */
export const clearTodoInput = P => () => P.setTodoInput(startTodoInput)
