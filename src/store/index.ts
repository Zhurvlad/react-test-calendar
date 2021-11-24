import {applyMiddleware, combineReducers, createStore} from "redux";
import thunk from 'redux-thunk'
import reducers from './reducers'


//Создаём стор и подключаем редакс фанк

const rootReducer = combineReducers(reducers)

export const store = createStore(rootReducer, applyMiddleware(thunk))


//Получаем тип состояния и тип диспатча
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch