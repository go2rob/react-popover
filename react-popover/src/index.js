import React from 'react'
import { render } from 'react-dom'
import Popover from './components/popover'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

render(<Popover right/>, document.getElementById('root'))
registerServiceWorker();
