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
        <button id = 'popTop'> Top </button>
      </div>
      <div className = 'buttons'>
        <button id = 'popLeft'> Left </button>
      </div>
      <div className = 'buttons'>
        <button id = 'popRight'> Right </button>
      </div>
      <Popover
        right
        targetId = 'popRight'
        title = 'Popover Title'
        body = {
          <div>
            <b>Bold Text</b>
            <p><i>Italic Text</i></p>
            <p><button>Button</button></p>
          </div>
        }
      />
      <Popover
        left
        targetId = 'popLeft'
        title = 'Popover Title'
        body = {
          <div>
            <b>Bold Text</b>
            <p><i>Italic Text</i></p>
            <p><button>Button</button></p>
          </div>
        }
      />
      <Popover
        top
        targetId = 'popTop'
        title = 'Popover Title'
        body = {
          <div>
            <b>Bold Text</b>
            <p><i>Italic Text</i></p>
            <p><button>Button</button></p>
          </div>
        }
      />
      <Popover
        bottom
        targetId = 'popBottom'
        title = 'Popover Title'
        body = {
          <div>
            <b>Bold Text</b>
            <p><i>Italic Text</i></p>
            <p><button>Button</button></p>
          </div>
        }
      />
    </div>
  )
}
render(<Buttons/>, document.getElementById('root'))
registerServiceWorker();
