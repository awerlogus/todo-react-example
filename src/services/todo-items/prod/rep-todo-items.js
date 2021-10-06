import assert from 'assert'

// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

/** @typedef {import('services/todo-items/rep-todo-items').TodoItemsRepository} TodoItemsRepository */

// SECTION State

/** @type {Map<number, Item>} */
const state = new Map()

// SECTION Interpreters

/** @type {TodoItemsRepository['setTodoItemProp']} */
function setTodoItemProp (id, key, value) {
  const item = state.get(id)

  assert(item !== undefined)

  item[key] = value
}

// SECTION Exports

/** @type {TodoItemsRepository} */
export const todoItemsRepository = {
  getTodoItems: () => Array.from(state.values()),
  removeTodoItem: state.delete.bind(state),
  hasTodoItem: state.has.bind(state),
  addTodoItem: state.set.bind(state),
  getTodoItem: state.get.bind(state),
  setTodoItemProp,
}
