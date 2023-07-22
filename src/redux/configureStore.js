import {createStore, combineReducers, applyMiddleware} from 'redux';
import { Dishes } from './dishes';
import { Comments } from './comments';
import { Promostions } from './promotions';
import { Leaders } from './leaders';
import thunk from 'redux-thunk'; //middleware
import logger from 'redux-logger'; //middleware

export const ConfigureStore = () => {
    const store = createStore(
        combineReducers({
            dishes: Dishes,
            comments: Comments,
            promotions : Promostions,
            leaders: Leaders
        }),
        applyMiddleware(thunk, logger)
    );

    return store;
}