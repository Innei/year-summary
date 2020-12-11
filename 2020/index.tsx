import * as React from 'react'
import ReactDOM from 'react-dom'
import { App } from './App'
import 'normalize.css'

import './main.scss'

const $app = document.getElementById('app')

ReactDOM.render(<App />, $app)
