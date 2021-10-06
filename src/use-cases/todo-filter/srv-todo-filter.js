import assert from 'assert'

// SECTION Types

// MODULE Imports

/** @typedef {import('models/filter-type').FilterType} FilterType */

/** @typedef {import('use-cases/program/alg-program').Program} Program */

// MODULE Events

/** @typedef {{ filterTypeChanged(): void }} FilterTypeChanged */

/**
 * @typedef {(
 *  & FilterTypeChanged
 * )} TodoFilterEvents
 */

// SECTION Commands

/** @type {(P: Program) => (type: FilterType) => void} */
export const setTodoFilter = P => type => {
  assert(P.getFilterType() !== type)

  P.setFilterType(type)

  P.emit('filterTypeChanged')
}

/** @type {(P: Program) => () => void} */
export const setAllFilter = P => () => setTodoFilter(P)('all')

/** @type {(P: Program) => () => void} */
export const setDoneFilter = P => () => setTodoFilter(P)('done')

/** @type {(P: Program) => () => void} */
export const setUndoneFilter = P => () => setTodoFilter(P)('undone')
