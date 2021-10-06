import { addTodoItem, getFilteredItems, isItemDone, setItemDoneStatus, toggleItemDoneStatus } from 'services/todo-items/srv-todo-items'
import { createTestTodoItemsAlgebra } from 'services/todo-items/test/alg-todo-items'
import { defaultItemDoneStatus } from 'models/mdl-items'

// SECTION Tests

describe('isItemDone function', () => {
  it('must return true if item is done', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: true }],
      ]),
      todoIdsRepository: 2,
    })

    expect(isItemDone(P)(1)).toBe(true)
  })

  it('must return false if item is undone', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: false }],
      ]),
      todoIdsRepository: 2,
    })

    expect(isItemDone(P)(1)).toBe(false)
  })
})

describe('getFilteredItems function', () => {
  it('must return all items if filter is \'all\'', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: false }],
        [2, { id: 2, text: '2', done: true }],
      ]),
      todoIdsRepository: 3,
    })

    expect(getFilteredItems(P)('all')).toMatchObject([
      { id: 1, text: '1', done: false },
      { id: 2, text: '2', done: true },
    ])
  })

  it('must return all items if filter is \'done\'', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: false }],
        [2, { id: 2, text: '2', done: true }],
      ]),
      todoIdsRepository: 3,
    })

    expect(getFilteredItems(P)('done')).toMatchObject([
      { id: 2, text: '2', done: true },
    ])
  })

  it('must return all items if filter is \'undone\'', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: false }],
        [2, { id: 2, text: '2', done: true }],
      ]),
      todoIdsRepository: 3,
    })

    expect(getFilteredItems(P)('undone')).toMatchObject([
      { id: 1, text: '1', done: false },
    ])
  })
})

describe('setItemDoneStatus function', () => {
  it('should set item status', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: false }]
      ]),
      todoIdsRepository: 2
    })

    setItemDoneStatus(P)(1, true)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: '1', done: true }]
    ]))

    setItemDoneStatus(P)(1, false)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: '1', done: false }]
    ]))
  })
})

describe('toggleItemDoneStatus function', () => {
  it('should toggle item done status', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: false }]
      ]),
      todoIdsRepository: 2
    })

    toggleItemDoneStatus(P)(1)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: '1', done: true }]
    ]))

    toggleItemDoneStatus(P)(1)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: '1', done: false }]
    ]))
  })
})

describe('addTodoItem function', () => {
  it('must add todo item and increment next todo id', () => {
    const P = createTestTodoItemsAlgebra({
      todoItemsRepository: new Map(),
      todoIdsRepository: 1,
    })

    addTodoItem(P)('todo text')

    expect(P._getNextTodoId()).toBe(2)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: 'todo text', done: defaultItemDoneStatus }]
    ]))
  })
})
