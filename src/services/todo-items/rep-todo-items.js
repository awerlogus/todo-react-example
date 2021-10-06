// SECTION Types

// MODULE Imports

/** @typedef {import('models/item').Item} Item */

/** @template T @typedef {import('@awerlogus/data-types/lib/option').Option<T>} Option */

// MODULE Algebras

/** @typedef {{ hasTodoItem(id: number): boolean }} HasTodoItem */

/** @typedef {{ removeTodoItem(id: number): void }} RemoveTodoItem */

/** @typedef {{ getTodoItems(): ReadonlyArray<Item> }} GetTodoItems */

/** @typedef {{ getTodoItem(id: number): Option<Item> }} GetTodoItem */

/** @typedef {{ addTodoItem(id: number, item: Item): void }} AddTodoItem */

/** @typedef {{ setTodoItemProp<K extends keyof Item>(id: number, prop: K, value: Item[K]): void }} SetTodoItemProp */

/**
 * @typedef {(
 *  & GetTodoItem
 *  & HasTodoItem
 *  & AddTodoItem
 *  & GetTodoItems
 *  & RemoveTodoItem
 *  & SetTodoItemProp
 * )} TodoItemsRepository
 */

// SECTION Exports

export default {}
