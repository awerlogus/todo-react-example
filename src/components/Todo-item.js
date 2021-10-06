import { removeTodoItem, toggleItemDoneStatus } from 'use-cases/todo-items/srv-todo-items'
import { useEvent, useRecompute } from 'use-cases/events/lib-events-hook'
import * as B from '@awerlogus/data-types/lib/predicate'
import * as O from '@awerlogus/data-types/lib/option'
import assert from 'assert'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/program/alg-program').Program} Program */

// SECTION Utils

/** @type {(x: number) => (y: number) => boolean} */
const numEqC = x => y => x === y

// SECTION Component

/** @type {(props: { P: Program, id: number, n: number }) => JSX.Element} */
export function TodoItem ({ P, id, n }) {
  const recompute = useRecompute()

  useEvent(P, 'todoItemDoneStatusChanged', B.then(numEqC(id), recompute))

  const item = P.getTodoItem(id)

  assert(O.isSome(item))

  const { text, done } = item

  const status = done ? 'DONE' : 'TODO'

  /** @type {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} */
  const handleRemove = e => { e.preventDefault(); removeTodoItem(P)(id) }

  /** @type {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} */
  const handleToggle = e => { e.preventDefault(); toggleItemDoneStatus(P)(id) }

  return (
    <div className='flex flex-row' key={n}>
      <span>{n}) {status}: {text}</span>
      <button onClick={handleRemove} className='ml-2'>X</button>
      <button onClick={handleToggle} className='ml-2'>toggle</button>
    </div>
  )
}
