import { defaultFilterType } from 'models/mdl-filter-type'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-filter/rep-todo-filter').TodoFilterRepository} TodoFilterRepository */

// SECTION State

let state = defaultFilterType

// SECTION Interpreters

/** @type {TodoFilterRepository['getFilterType']} */
function getFilterType () { return state }

/** @type {TodoFilterRepository['setFilterType']} */
function setFilterType (type) { state = type }

// SECTION Exports

/** @type {TodoFilterRepository} */
export const todoFilterRepository = {
  getFilterType,
  setFilterType,
}
