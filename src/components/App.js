import { FilterButtons } from 'components/Filter-buttons'
import { TodoItems } from 'components/Todo-items'
import { TodoInput } from 'components/Todo-input'

// SECTION Types

// MODULE Imports

/** @typedef {import('use-cases/program/alg-program').Program} Program */

// SECTION Component

/** @type {(props: { P: Program }) => JSX.Element} */
export function App ({ P }) {
  return (
    <div className='w-3 flex flex-col'>
      <TodoInput P={P}/>
      <FilterButtons P={P}/>
      <TodoItems P={P} />
    </div>
  )
}
