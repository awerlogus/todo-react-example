import assert from 'assert'

// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

/** @typedef {import('services/todo-items/rep-todo-items').TodoItemsRepository} TodoItemsRepository */

// MODULE Algebras

/** @typedef {{ _getTodoItems(): ReadonlyMap<number, Item> }} _GetTodoItems */

/**
 * @typedef {(
 *  & _GetTodoItems
 *  & TodoItemsRepository
 * )} _TodoItemsRepository
 */

// SECTION Exports

/** @type {(initItems: ReadonlyMap<number, Item>) => _TodoItemsRepository} */
export const createTestTodoItemsRepository = initItems => {
  const items = new Map(initItems)

  /** @type {_TodoItemsRepository['setTodoItemProp']} */
  function setTodoItemProp (id, key, value) {
    const item = items.get(id)

    assert(item !== undefined)

    item[key] = value
  }

  return {
    getTodoItems: () => Array.from(items.values()),
    removeTodoItem: items.delete.bind(items),
    getTodoItem: items.get.bind(items),
    hasTodoItem: items.has.bind(items),
    addTodoItem: items.set.bind(items),
    _getTodoItems: () => items,
    setTodoItemProp,
  }
}
