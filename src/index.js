import React from 'react'
import { render } from 'react-dom'
import Popover from './components/popover'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const Buttons = props => {
  return (
    <div>
      <div className = 'buttons'>
        <button id = 'popBottom'> Bottom </button>
      </div>
      <div className = 'buttons'>
        <button id = 'popUp'> Up </button>
      </div>
      <div className = 'buttons'>
        <button id = 'popLeft'> Left </button>
      </div>
      <div className = 'buttons'>
        <button id = 'popRight'> Right </button>
        <span>hai</span>
      </div>
      <Popover right targetId = 'popRight'/>
    </div>
  )
}
render(<Buttons/>, document.getElementById('root'))
registerServiceWorker();
