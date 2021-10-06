import { todoInputRepository } from 'services/todo-input/prod/rep-todo-input'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-input/alg-todo-input').TodoInputAlgebra} TodoInputAlgebra */

// SECTION Exports

/** @type {TodoInputAlgebra} */
export const todoInputAlgebra = {
  ...todoInputRepository
}
