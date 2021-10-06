import { createTestTodoFilterAlgebra } from 'services/todo-filter/test/alg-todo-filter'
import { createTestTodoInputAlgebra } from 'services/todo-input/test/alg-todo-input'
import { createTestTodoItemsAlgebra } from 'services/todo-items/test/alg-todo-items'
import { createTestEventSystem } from 'packages/test-event-emitter'
import { defaultFilterType } from 'models/mdl-filter-type'
import { startTodoInput } from 'models/mdl-todo-input'
import { startTodoId } from 'models/mdl-todo-ids'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/events/alg-events').Events} Events */

// MODULE Algebras

/**
 * @typedef {(
 *  & import('services/todo-input/test/alg-todo-input').TodoInputAlgebraInit
 *  & import('services/todo-items/test/alg-todo-items').TodoItemsAlgebraInit
 *  & import('services/todo-filter/test/alg-todo-filter').TodoFilterAlgebraInit
 * )} ProgramInit
 */

/**
 * @typedef {(
 *  & import('packages/test-event-emitter')._EventSystem<Events>
 *  & import('services/todo-items/test/alg-todo-items')._TodoItemsAlgebra
 *  & import('services/todo-input/test/alg-todo-input')._TodoInputAlgebra
 *  & import('services/todo-filter/test/alg-todo-filter')._TodoFilterAlgebra
 * )} _Program
 */

// SECTION Constants

/** @type {ProgramInit} */
const defaultInit = {
  todoIdsRepository: startTodoId,
  todoItemsRepository: new Map(),
  todoInputRepository: startTodoInput,
  todoFilterRepository: defaultFilterType,
}

// SECTION Exports

/** @type {(init?: Partial<ProgramInit>) => _Program} */
export const createTestProgram = (init = {}) => {
  /** @type {ProgramInit} */
  const fullInit = { ...defaultInit, ...init }

  /** @type {import('packages/test-event-emitter')._EventSystem<Events>} */
  const eventSystem = createTestEventSystem()

  return {
    ...eventSystem,
    ...createTestTodoItemsAlgebra(fullInit),
    ...createTestTodoInputAlgebra(fullInit),
    ...createTestTodoFilterAlgebra(fullInit),
  }
}
