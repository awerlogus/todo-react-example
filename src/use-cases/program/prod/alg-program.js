import { todoFilterAlgebra } from 'services/todo-filter/prod/alg-todo-filter'
import { todoInputAlgebra } from 'services/todo-input/prod/alg-todo-input'
import { todoItemsAlgebra } from 'services/todo-items/prod/alg-todo-items'
import { eventsAlgebra } from 'use-cases/events/alg-events'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/program/alg-program').Program} Program */

// SECTION Exports

/** @type {Program} */
export const program = {
  ...todoFilterAlgebra,
  ...todoItemsAlgebra,
  ...todoInputAlgebra,
  ...eventsAlgebra,
}
