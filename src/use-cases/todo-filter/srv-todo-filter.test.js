import { setAllFilter, setDoneFilter, setTodoFilter, setUndoneFilter } from 'use-cases/todo-filter/srv-todo-filter'
import { createTestProgram } from 'use-cases/program/test/alg-program'

// SECTION Tests

describe('setTodoFilter function', () => {
  it('should set todo filter to the value provided and emit event', () => {
    const P = createTestProgram({ todoFilterRepository: 'all' })

    setTodoFilter(P)('done')

    expect(P._getFilterType()).toBe('done')

    expect(P._getEmittedEvents()).toMatchObject([
      'filterTypeChanged',
    ])

    setTodoFilter(P)('undone')

    expect(P._getFilterType()).toBe('undone')

    expect(P._getEmittedEvents()).toMatchObject([
      'filterTypeChanged',
      'filterTypeChanged',
    ])

    setTodoFilter(P)('all')

    expect(P._getFilterType()).toBe('all')

    expect(P._getEmittedEvents()).toMatchObject([
      'filterTypeChanged',
      'filterTypeChanged',
      'filterTypeChanged',
    ])
  })
})

describe('setAllFilter function', () => {
  it('should set filter to \'all\' and emit event', () => {
    const P = createTestProgram({ todoFilterRepository: 'done' })

    setAllFilter(P)()

    expect(P._getFilterType()).toBe('all')

    expect(P._getEmittedEvents()).toMatchObject([
      'filterTypeChanged'
    ])
  })
})

describe('setDoneFilter function', () => {
  it('should set filter to \'done\' and emit event', () => {
    const P = createTestProgram({ todoFilterRepository: 'all' })

    setDoneFilter(P)()

    expect(P._getFilterType()).toBe('done')

    expect(P._getEmittedEvents()).toMatchObject([
      'filterTypeChanged'
    ])
  })
})

describe('setUndoneFilter function', () => {
  it('should set filter to \'undone\' and emit event', () => {
    const P = createTestProgram({ todoFilterRepository: 'all' })

    setUndoneFilter(P)()

    expect(P._getFilterType()).toBe('undone')

    expect(P._getEmittedEvents()).toMatchObject([
      'filterTypeChanged'
    ])
  })
})
