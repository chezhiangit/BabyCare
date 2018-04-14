import {createStore, applyMiddleware, compose} from 'redux'
import thunk from 'redux-thunk'
import rootReducer from '../Reducers'

export default function configureStore(initialState) {
  const enhancer = compose(
    applyMiddleware(thunk)
  )
  return createStore(rootReducer, initialState, enhancer)
}