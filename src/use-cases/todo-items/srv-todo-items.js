import { addTodoItem as runTodoItemAdd, filterItems, toggleItemDoneStatus as runItemDoneStatusToggle } from 'services/todo-items/srv-todo-items'
import { clearTodoInput } from 'use-cases/todo-input/srv-todo-input'
import * as F from '@awerlogus/data-types/lib/function'
import * as Item from 'models/item'
import assert from 'assert'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/program/alg-program').Program} Program */

/** @template T @typedef {import('@awerlogus/data-types/lib/option').Option<T>} Option */

// MODULE Events


/** @typedef {{ todoItemAdded(id: number): void }} TodoItemAdded */

/** @typedef {{ todoItemRemoved(id: number): void }} TodoItemRemoved */

/** @typedef {{ todoItemDoneStatusChanged(id: number): void }} TodoItemDoneStatusChanged */

/**
 * @typedef {(
 *  & TodoItemAdded
 *  & TodoItemRemoved
 *  & TodoItemDoneStatusChanged
 * )} todoItemsEvents
 */

// SECTION Queries

/** @type {(P: Program) => () => ReadonlyArray<Item.Item>} */
export const getFilteredItems = P => F.flow(P.getFilterType, filterItems(P))

// SECTION Commands

/** @type {(P: Program) => (id: number) => void} */
export const removeTodoItem = P => id => {
  assert(P.hasTodoItem(id))

  P.removeTodoItem(id)

  P.emit('todoItemRemoved', id)
}

/** @type {(P: Program) => (id: number) => void} */
export const toggleItemDoneStatus = P => id => {
  runItemDoneStatusToggle(P)(id)

  P.emit('todoItemDoneStatusChanged', id)
}

// SECTION Tasks

/** @type {(P: Program) => () => Option<number>} */
export const addTodoItem = P => () => {
  const text = P.getTodoInput()

  if (text.length === 0) { return }

  const id = runTodoItemAdd(P)(text)

  clearTodoInput(P)()

  P.emit('todoItemAdded', id)

  return id
}
