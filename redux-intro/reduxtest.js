const { createStore } = require('redux');

const initialState = {
  age:21
}

const myReducer = (state = initialState, action) => {
  const newState = {...state};

  if(action.type === 'ADD'){
    newState.age += action.val;
  }
  if(action.type === 'SUB'){
    newState.age -= action.val;
  }

  //always return newState in reducer
  return newState;
  //newState becomes a set state in the store
}

const store = createStore(myReducer);
//after store i must subscribe to it right after
//whenever there's a change in state it automatically runs
store.subscribe(() => {
  console.log('state changed' + JSON.stringify(store.getState()));

})

store.dispatch({type:'ADD', val:10});
store.dispatch({type:'SUB', val:5});
