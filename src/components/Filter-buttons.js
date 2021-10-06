import { setAllFilter, setDoneFilter, setUndoneFilter } from 'use-cases/todo-filter/srv-todo-filter'
import { showAll, showDone, showUndone } from 'services/todo-filter/srv-todo-filter'
import { useEvent, useRecompute } from 'use-cases/events/lib-events-hook'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/program/alg-program').Program} Program */

// SECTION Component

/** @type {(props: { P: Program }) => JSX.Element} */
export function FilterButtons ({ P }) {
  const recompute = useRecompute()

  useEvent(P, 'filterTypeChanged', recompute)

  /** @type {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} */
  const handleAllClick = e => {
    e.preventDefault()

    if (!showAll(P)()) {
      setAllFilter(P)()
    }
  }

  /** @type {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} */
  const handleDoneClick = e => {
    e.preventDefault()

    if (!showDone(P)()) {
      setDoneFilter(P)()
    }
  }

  /** @type {(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void} */
  const handleUndoneClick = e => {
    e.preventDefault()

    if (!showUndone(P)()) {
      setUndoneFilter(P)()
    }
  }

  return (
    <div className='flex mb-2'>
      <button onClick={handleAllClick} disabled={showAll(P)()} className='flex-el-1'>Show all</button>
      <button onClick={handleDoneClick} disabled={showDone(P)()} className='flex-el-1'>Show done</button>
      <button onClick={handleUndoneClick} disabled={showUndone(P)()} className='flex-el-1'>Show undone</button>
    </div>
  )
}
