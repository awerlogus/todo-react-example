// SECTION Types

// MODULE Imports

/** @typedef {import('models/filter-type').FilterType} FilterType */

// MODULE Algebras

/** @typedef {{ getFilterType(): FilterType }} GetFilterType */

/** @typedef {{ setFilterType(type: FilterType): void }} SetFilterType */

/**
 * @typedef {(
 *  & GetFilterType
 *  & SetFilterType
 * )} TodoFilterRepository
 */

// SECTION Exports

export default {}
