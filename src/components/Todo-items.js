import { useEvent, useRecompute } from 'use-cases/events/lib-events-hook'
import { getFilteredItems } from 'use-cases/todo-items/srv-todo-items'
import { TodoItem } from 'components/Todo-item'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/program/alg-program').Program} Program */

// SECTION Component

/** @type {(props: { P: Program }) => JSX.Element} */
export function TodoItems ({ P }) {
  const recompute = useRecompute()

  useEvent(P, 'todoItemAdded', recompute)
  useEvent(P, 'todoItemRemoved', recompute)
  useEvent(P, 'filterTypeChanged', recompute)

  const items = getFilteredItems(P)()

  return (<>
    {items.map(({ id }, i) => <TodoItem P={P} id={id} n={i+1} />)}
  </>)
}
