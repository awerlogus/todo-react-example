import { defaultItemDoneStatus as done } from 'models/mdl-items'
import * as B from '@awerlogus/data-types/lib/predicate'
import * as F from '@awerlogus/data-types/lib/function'
import * as O from '@awerlogus/data-types/lib/option'
import * as Item from 'models/item'
import assert from 'assert'

// SECTION Types

// MODULE Imports

/** @typedef {import('models/filter-type').FilterType} FilterType */

/** @typedef {import('services/todo-items/alg-todo-items').TodoItemsAlgebra} TodoItemsAlgebra */

// SECTION Queries

/** @type {(P: TodoItemsAlgebra) => (id: number) => O.Option<boolean>} */
export const isItemDone = P => F.flow(P.getTodoItem, O.mapC(Item.isDone))

/** @type {(P: TodoItemsAlgebra) => (type: FilterType) => ReadonlyArray<Item.Item>} */
export const filterItems = P => type => {
  switch (type) {
    case 'all':
      return P.getTodoItems()

    case 'done':
      return P.getTodoItems()
        .filter(Item.isDone)

    case 'undone':
      return P.getTodoItems()
        .filter(B.not(Item.isDone))
  }
}

// SECTION Commands

/** @type {(P: TodoItemsAlgebra) => (id: number, status: boolean) => void} */
export const setItemDoneStatus = P => (id, status) => P.setTodoItemProp(id, 'done', status)

/** @type {(P: TodoItemsAlgebra) => (id: number) => void} */
export const toggleItemDoneStatus = P => id => {
  const status = isItemDone(P)(id)

  assert(O.isSome(status))

  setItemDoneStatus(P)(id, !status)
}

// SECTION Tasks

/** @type {(P: TodoItemsAlgebra) => (text: string) => number} */
export const addTodoItem = P => text => {
  const id = P.getNextTodoId()

  /** @type {Item.Item} */
  const item = { id, text, done }

  P.addTodoItem(id, item)

  P.incrementNextTodoId()

  return id
}
