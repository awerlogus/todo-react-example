// SECTION Types

// MODULE Declarations

/**
 * @typedef {{
 *   done: boolean
 *   text: string
 *   id: number
 * }} Item
 */

// SECTION Library

/** @type {(item: Item) => Item['done']} */
export const isDone = item => item.done

/** @type {(item: Item) => Item['text']} */
export const getText = item => item.text

/** @type {(item: Item) => Item['id']} */
export const getId = item => item.id
