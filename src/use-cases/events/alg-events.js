import { createEventSystem } from '@xroom.app/events2'

// SECTION Types

// MODULE Imports

/** @typedef {import('@xroom.app/events2').EventSystem<Events>} EventSystem */

// MODULE Algebras

/**
 * @typedef {(
 *  & import('use-cases/todo-input/srv-todo-input').TodoInputEvents
 *  & import('use-cases/todo-items/srv-todo-items').todoItemsEvents
 *  & import('use-cases/todo-filter/srv-todo-filter').TodoFilterEvents
 * )} Events
 */

// SECTION Exports

/** @type {EventSystem} */
export const eventsAlgebra = createEventSystem()
