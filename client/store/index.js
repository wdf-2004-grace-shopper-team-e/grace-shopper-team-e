import {createStore, combineReducers, applyMiddleware} from 'redux'
import {createLogger} from 'redux-logger'
import thunkMiddleware from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'
import user from './user'
import plants from './plants'
import orderSummary from './orderSummary'
import singlePlant from './singlePlant'
import order from './orders'

const reducer = combineReducers({
  user,
  plants,
  singlePlant,
  orderSummary,
  order
})

const middleware = composeWithDevTools(
  applyMiddleware(thunkMiddleware, createLogger({collapsed: true}))
)
const store = createStore(reducer, middleware)

export default store
export * from './user'
