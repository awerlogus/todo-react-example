// SECTION Types

// MODULE Imports

/** @typedef {import('@xroom.app/events2').Event} Event */

/** @template {Event} E @typedef {import('@xroom.app/events2').EventSystem<E>} EventSystem */

// MODULE Algebras

/** @template {Event} E @typedef {{ _getEmittedEvents(): ReadonlyArray<keyof E> }} _GetEmittedEvents */

/**
 * @template {Event} E
 *
 * @typedef {(
 *  & _GetEmittedEvents<E>
 *  & EventSystem<E>
 * )} _EventSystem
 */

// SECTION Library

/** @type {<E extends Event>() => _EventSystem<E>} */
export const createTestEventSystem = () => {
  /** @type {Array<any>} */
  const state = []

  return {
    _getEmittedEvents: () => state,
    emit: (...data) => {
      if (data.length === 1) {
        state.push(data[0])
      } else {
        state.push(data)
      }
    },
    on: () => Symbol(),
    off: () => {},
  }
}
