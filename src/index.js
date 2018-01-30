import React from 'react'
import { render } from 'react-dom'
import { Provider } from 'react-redux'
import { createStore } from 'redux'
import listApp from './reducers'
import App from './components/App'

const store = createStore(listApp)

store.subscribe(() => {
	console.log(store.getState())
})

render(
	<Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
