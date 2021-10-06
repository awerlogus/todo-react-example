import { startTodoInput } from 'models/mdl-todo-input'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-input/rep-todo-input').TodoInputRepository} TodoInputRepository */

// SECTION State

let state = startTodoInput

// SECTION Interpreters

/** @type {TodoInputRepository['getTodoInput']} */
function getTodoInput () { return state }

/** @type {TodoInputRepository['setTodoInput']} */
function setTodoInput (text) { state = text }

// SECTION Exports

/** @type {TodoInputRepository} */
export const todoInputRepository = {
  getTodoInput,
  setTodoInput,
}
