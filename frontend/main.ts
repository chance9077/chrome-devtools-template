import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'

export function createApp() { 
  ReactDOM.render(
    React.createElement(App),
    document.querySelector('#root')
  )
}