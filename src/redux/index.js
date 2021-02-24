import {createStore,combineReducers,applyMiddleware,compose} from 'redux'
import * as reducers from './reducers'
import thunk from 'redux-thunk';


const rootReducer = combineReducers(reducers)

const store = createStore(rootReducer,compose(applyMiddleware(thunk)))

export default store