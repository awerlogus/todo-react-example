import { useEvent, useRecompute } from 'use-cases/events/lib-events-hook'
import { setTodoInput } from 'use-cases/todo-input/srv-todo-input'
import { addTodoItem } from 'use-cases/todo-items/srv-todo-items'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/program/alg-program').Program} Program */

// SECTION Component

/** @type {(props: { P: Program }) => JSX.Element} */
export function TodoInput ({ P }) {
  const recompute = useRecompute()

  useEvent(P, 'todoInputChanged', recompute)

  /** @type {(e: React.ChangeEvent<HTMLInputElement>) => void} */
  const updateInput = e => setTodoInput(P)(e.target.value)

  /** @type {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} */
  const handleClick = e => { e.preventDefault(); addTodoItem(P)() }

  return (
    <>
      <input value={P.getTodoInput()} onChange={updateInput} />
      <button onClick={handleClick}>Add TODO item</button>
    </>
  )
}
