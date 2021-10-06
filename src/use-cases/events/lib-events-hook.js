import { useEffect, useReducer } from 'react'

// SECTION Types

// MODULE Imports

/** @typedef {import('react').DependencyList} DependencyList */

/** @typedef {import('use-cases/events/alg-events').Events} Events */

/** @typedef {import('use-cases/events/alg-events').EventSystem} EventSystem */

// SECTION Library

/**  @type {<E extends keyof Events>(P: EventSystem, eventName: E, callback: Events[E], deps?: DependencyList) => any} */
export function useEvent (P, eventName, callback, inputs = []) {

  useEffect(() => {
    const sym = P.on(eventName, callback)

    return () => P.off(sym)
  }, inputs)
}

/** @type {() => () => void} */
export const useRecompute = () => useReducer(x => !x, false)[1]
