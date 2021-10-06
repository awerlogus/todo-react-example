import { program } from 'use-cases/program/prod/alg-program'
import { App } from 'components/App'
import ReactDOM from 'react-dom'
import React from 'react'
import './styles.css'

ReactDOM.render(
  <React.StrictMode>
    <App P={program} />
  </React.StrictMode>,
  document.getElementById('root')
)

// @ts-ignore
global.P = program
