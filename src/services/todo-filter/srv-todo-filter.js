import * as F from '@awerlogus/data-types/lib/function'
import * as FilterType from 'models/filter-type'

// SECTION Types

// MODULE Imports

/** @typedef {import('services/todo-filter/alg-todo-filter').TodoFilterAlgebra} TodoFilterAlgebra */

// SECTION Queries

/** @type {(P: TodoFilterAlgebra) => () => boolean} */
export const showAll = P => F.flow(P.getFilterType, FilterType.showAll)

/** @type {(P: TodoFilterAlgebra) => () => boolean} */
export const showDone = P => F.flow(P.getFilterType, FilterType.showDone)

/** @type {(P: TodoFilterAlgebra) => () => boolean} */
export const showUndone = P => F.flow(P.getFilterType, FilterType.showUndone)
