import { startTodoInput } from 'models/mdl-todo-input'
import assert from 'assert'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/program/alg-program').Program} Program */

// MODULE Events

/** @typedef {{ todoInputChanged(): void }} TodoInputChanged */

/**
 * @typedef {(
 *  & TodoInputChanged
 * )} TodoInputEvents
 */

// SECTION Commands

/** @type {(P: Program) => (text: string) => void} */
export const setTodoInput = P => text => {
  assert(P.getTodoInput() !== text)

  P.setTodoInput(text)

  P.emit('todoInputChanged')
}

/** @type {(P: Program) => () => void} */
export const clearTodoInput = P => () => setTodoInput(P)(startTodoInput)
