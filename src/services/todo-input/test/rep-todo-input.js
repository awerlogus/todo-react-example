// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-input/rep-todo-input').TodoInputRepository} TodoInputRepository */

// MODULE Algebras

/** @typedef {{ _getTodoInput(): string }} _GetTodoInput */

/**
 * @typedef {(
 *  & _GetTodoInput
 *  & TodoInputRepository
 * )} _TodoInputRepository
 */

// SECTION Exports

/** @type {(init: string) => _TodoInputRepository} */
export const createTestTodoInputRepository = init => {
  let state = init

  return {
    setTodoInput: text => { state = text },
    _getTodoInput: () => state,
    getTodoInput: () => state,
  }
}
