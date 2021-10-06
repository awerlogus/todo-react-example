import { todoFilterRepository } from 'services/todo-filter/prod/rep-todo-filter'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-filter/alg-todo-filter').TodoFilterAlgebra} TodoFilterAlgebra */

// SECTION Exports

/** @type {TodoFilterAlgebra} */
export const todoFilterAlgebra = {
  ...todoFilterRepository
}
