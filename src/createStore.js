export default function createStore(reducer) {

<<<<<<< HEAD
  let state = 0
=======
  let state
>>>>>>> e4072b75b69116c6c5ab744b84bbc3cc5d8aef34

  function dispatch(action){
    state = reducer(state, action)
    render()
  }

  function getState(){
    return state
  }

  return {
    dispatch,
    getState
  }
<<<<<<< HEAD
=======
}

function changeCount(state = { count: 0 }, action) {
  switch (action.type) {
    case 'DECREASE_COUNT':
      return { count: state.count - 1 };
    default:
      return state;
  }
>>>>>>> e4072b75b69116c6c5ab744b84bbc3cc5d8aef34
}

function render() {
  const container = document.getElementById('container');
}

let store = createStore(changeCount) // createStore takes the changeCount reducer as an argument
store.dispatch({ type: '@@INIT' });
