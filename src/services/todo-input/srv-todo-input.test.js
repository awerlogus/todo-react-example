import { createTestTodoInputAlgebra } from 'services/todo-input/test/alg-todo-input'
import { clearTodoInput, todoInputEmpty } from 'services/todo-input/srv-todo-input'
import { startTodoInput } from 'models/mdl-todo-input'

// SECTION Tests

describe('todoInputEmpty function', () => {
  it('should return true if input is empty', () => {
    const P = createTestTodoInputAlgebra({ todoInputRepository: startTodoInput })

    expect(todoInputEmpty(P)()).toBe(true)
  })

  it('should return false if input is not empty', () => {
    const P = createTestTodoInputAlgebra({ todoInputRepository: startTodoInput + '123' })

    expect(todoInputEmpty(P)()).toBe(false)
  })
})

describe('clearTodoInput function', () => {
  it('must clear todo input', () => {
    const P = createTestTodoInputAlgebra({ todoInputRepository: startTodoInput + '123' })

    clearTodoInput(P)()

    expect(P._getTodoInput()).toBe(startTodoInput)
  })
})
