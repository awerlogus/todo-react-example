import { startTodoInput } from 'models/mdl-todo-input'
import { createTestProgram } from 'use-cases/program/test/alg-program'
import { clearTodoInput, setTodoInput } from 'use-cases/todo-input/srv-todo-input'

// SECTION Tests

describe('setTodoInput function', () => {
  it('should set todo input to the value passed and emit event', () => {
    const P = createTestProgram({ todoInputRepository: '' })

    setTodoInput(P)('123')

    expect(P._getTodoInput()).toBe('123')

    expect(P._getEmittedEvents()).toMatchObject(['todoInputChanged'])
  })
})

describe('clearTodoInput function', () => {
  it('should clear todo input and emit event', () => {
    const P = createTestProgram({ todoInputRepository: startTodoInput + '123' })

    clearTodoInput(P)()

    expect(P._getTodoInput()).toBe(startTodoInput)

    expect(P._getEmittedEvents()).toMatchObject(['todoInputChanged'])
  })
})
