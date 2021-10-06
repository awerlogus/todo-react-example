import { createTestTodoInputRepository } from 'services/todo-input/test/rep-todo-input'

// SECTION Types

// MODULE Algebras

/** @typedef {{ todoInputRepository: string }} TodoInputRepositoryInit */

/**
 * @typedef {(
 *  & TodoInputRepositoryInit
 * )} TodoInputAlgebraInit
 */

/**
 * @typedef {(
 *  & import('services/todo-input/test/rep-todo-input')._TodoInputRepository
 * )} _TodoInputAlgebra
 */

// SECTION Exports

/** @type {(init: TodoInputAlgebraInit) => _TodoInputAlgebra} */
export const createTestTodoInputAlgebra = init => ({
  ...createTestTodoInputRepository(init.todoInputRepository),
})
