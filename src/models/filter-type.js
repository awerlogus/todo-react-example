// SECTION Types

// MODULE Declarations

/** @typedef {'all' | 'done' | 'undone'} FilterType */

// SECTION Library

/** @type {(type: FilterType) => type is 'all'} */
export const showAll = type => type === 'all'

/** @type {(type: FilterType) => type is 'done'} */
export const showDone = type => type === 'done'

/** @type {(type: FilterType) => type is 'undone'} */
export const showUndone = type => type === 'undone'
