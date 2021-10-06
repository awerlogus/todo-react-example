// SECTION Types

// MODULE Imports

/** @typedef {import('models/filter-type').FilterType} FilterType */

/** @typedef {import('services/todo-filter/rep-todo-filter').TodoFilterRepository} TodoFilterRepository */

// MODULE Algebras

/** @typedef {{ _getFilterType(): FilterType }} _GetFilterType */

/**
 * @typedef {(
 *  & _GetFilterType
 *  & TodoFilterRepository
 * )} _TodoFilterRepository
 */

// SECTION Exports

/** @type {(initType: FilterType) => _TodoFilterRepository} */
export const createTestTodoFilterRepository = initType => {
  let state = initType

  return {
    setFilterType: type => { state = type },
    _getFilterType: () => state,
    getFilterType: () => state,
  }
}
