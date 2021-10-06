import { addTodoItem, getFilteredItems, removeTodoItem, toggleItemDoneStatus } from 'use-cases/todo-items/srv-todo-items'
import { createTestProgram } from 'use-cases/program/test/alg-program'
import { defaultItemDoneStatus } from 'models/mdl-items'
import { startTodoInput } from 'models/mdl-todo-input'
import { startTodoId } from 'models/mdl-todo-ids'

// SECTION Tests

describe('getFilteredItems function', () => {
  it('should return all items if filter type is \'all\'', () => {
    const P = createTestProgram({
      todoFilterRepository: 'all',
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: true }],
        [2, { id: 2, text: '2', done: false }],
      ])
    })

    expect(getFilteredItems(P)()).toMatchObject([
      { id: 1, text: '1', done: true },
      { id: 2, text: '2', done: false },
    ])
  })

  it('should return only done items if filter type is \'done\'', () => {
    const P = createTestProgram({
      todoFilterRepository: 'done',
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: true }],
        [2, { id: 2, text: '2', done: false }],
      ])
    })

    expect(getFilteredItems(P)()).toMatchObject([
      { id: 1, text: '1', done: true },
    ])
  })

  it('should return only undone items if filter type is \'undone\'', () => {
    const P = createTestProgram({
      todoFilterRepository: 'undone',
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: true }],
        [2, { id: 2, text: '2', done: false }],
      ])
    })

    expect(getFilteredItems(P)()).toMatchObject([
      { id: 2, text: '2', done: false },
    ])
  })
})

describe('removeTodoItem function', () => {
  it('should remove item and emit event', () => {
    const P = createTestProgram({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: true }],
        [2, { id: 2, text: '2', done: false }],
      ])
    })

    removeTodoItem(P)(1)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [2, { id: 2, text: '2', done: false }]
    ]))

    expect(P._getEmittedEvents()).toMatchObject([
      ['todoItemRemoved', 1]
    ])
  })
})

describe('toggleItemStatus function', () => {
  it('should toggle item done status and emit event', () => {
    const P = createTestProgram({
      todoItemsRepository: new Map([
        [1, { id: 1, text: '1', done: true }]
      ])
    })

    toggleItemDoneStatus(P)(1)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: '1', done: false }]
    ]))

    expect(P._getEmittedEvents()).toMatchObject([
      ['todoItemDoneStatusChanged', 1],
    ])

    toggleItemDoneStatus(P)(1)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: '1', done: true }]
    ]))

    expect(P._getEmittedEvents()).toMatchObject([
      ['todoItemDoneStatusChanged', 1],
      ['todoItemDoneStatusChanged', 1],
    ])
  })
})

describe('addTodoItem function', () => {
  it('should do nothing if input is empty', () => {
    const P = createTestProgram({
      todoInputRepository: startTodoInput
    })

    addTodoItem(P)()

    expect(P._getTodoInput()).toBe(startTodoInput)

    expect(P._getTodoItems()).toMatchObject(new Map())

    expect(P._getNextTodoId()).toBe(startTodoId)

    expect(P._getEmittedEvents()).toMatchObject([])
  })

  it('should add todo item, clear todo input and emit event', () => {
    const P = createTestProgram({
      todoInputRepository: '1234'
    })

    addTodoItem(P)()

    expect(P._getTodoInput()).toBe(startTodoInput)

    expect(P._getTodoItems()).toMatchObject(new Map([
      [1, { id: 1, text: '1234', done: defaultItemDoneStatus }]
    ]))

    expect(P._getNextTodoId()).toBe(startTodoId + 1)

    expect(P._getEmittedEvents()).toMatchObject([
      'todoInputChanged',
      ['todoItemAdded', 1]
    ])
  })
})
