import { combineReducers, createStore, applyMiddleware, Middleware } from 'redux';
import thunk from "redux-thunk";
import { createBrowserHistory } from 'history';

import { configureStore } from '@reduxjs/toolkit';
import example from './slices/example';

const actions = {
    example: example.actions
};

const history = createBrowserHistory<TLocationState>();

const reducer = combineReducers({
    example: example.reducer
});


const middleware = () => {
    const middleware: Middleware[] = [thunk];

    return middleware;
}

const store = configureStore({
    reducer,
    middleware
})

//epicMiddleware.run(epics);

const initialState = store.getState();

export default store;

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { actions, reducer, history, initialState };
