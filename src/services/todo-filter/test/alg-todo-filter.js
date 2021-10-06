import { createTestTodoFilterRepository } from 'services/todo-filter/test/rep-todo-filter'

// SECTION Types

// MODULE Imports

/** @typedef {import('models/filter-type').FilterType} FilterType */

// MODULE Algebras

/** @typedef {{ todoFilterRepository: FilterType }} TodoFilterRepositoryInit */

/**
 * @typedef {(
 *  & TodoFilterRepositoryInit
 * )} TodoFilterAlgebraInit
 */

/**
 * @typedef {(
 *  & import('services/todo-filter/test/rep-todo-filter')._TodoFilterRepository
 * )} _TodoFilterAlgebra
 */

// SECTION Exports

/** @type {(init: TodoFilterAlgebraInit) => _TodoFilterAlgebra} */
export const createTestTodoFilterAlgebra = init => ({
  ...createTestTodoFilterRepository(init.todoFilterRepository),
})
