import { createTestTodoFilterAlgebra } from 'services/todo-filter/test/alg-todo-filter'
import { showAll, showDone, showUndone } from 'services/todo-filter/srv-todo-filter'

// SECTION Tests

describe('showAll function', () => {
  it('must return true if filter type is \'all\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'all' })

    expect(showAll(P)()).toBe(true)
  })

  it('must return false if filter type is \'done\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'done' })

    expect(showAll(P)()).toBe(false)
  })

  it('must return false if filter type is \'undone\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'undone' })

    expect(showAll(P)()).toBe(false)
  })
})

describe('showDone function', () => {
  it('must return false if filter type is \'all\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'all' })

    expect(showDone(P)()).toBe(false)
  })

  it('must return true if filter type is \'done\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'done' })

    expect(showDone(P)()).toBe(true)
  })

  it('must return false if filter type is \'undone\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'undone' })

    expect(showDone(P)()).toBe(false)
  })
})

describe('showUndone function', () => {
  it('must return false if filter type is \'all\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'all' })

    expect(showUndone(P)()).toBe(false)
  })

  it('must return false if filter type is \'done\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'done' })

    expect(showUndone(P)()).toBe(false)
  })

  it('must return true if filter type is \'undone\'', () => {
    const P = createTestTodoFilterAlgebra({ todoFilterRepository: 'undone' })

    expect(showUndone(P)()).toBe(true)
  })
})
