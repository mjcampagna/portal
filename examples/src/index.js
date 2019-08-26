import React from 'react'
import { render } from 'react-dom'
import Portal from '../../src'

const App = () => (
  <Portal><p>In a portal ...</p></Portal>
)

render(<App />, document.getElementById('root'))
