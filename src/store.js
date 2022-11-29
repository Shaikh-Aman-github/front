import {applyMiddleware, legacy_createStore as createStore} from 'redux';

import rootReducer from "./services/reducers";
import thunk from 'redux-thunk';

const store = createStore(rootReducer, applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSTION__ && window.__REDUX_DEVTOOLS_EXTENSTION__()
);


export default store;
// //store
// const {createStore} = Redux;

// const initialState = {
//     todo: [],
//     posts:[]
// } 

// function reducer(state = initialState, action){
    
//     //reducer 
//     if(action.type === 'Add_TODO'){
//        return{ todo: [...state.todo, action.payload]}
//     }

// };


// const store = createStore(reducer); 

// //store subscribetion
// store.subscibe(() =>{
//     console.log("updated state");
//     console.log(store.getState());
// });

// //action 
// const addTodoAction = { type: 'Add_TODO', payload: 'learn redux'};

// //action dispatch
// store.dispatch(addTodoAction);
