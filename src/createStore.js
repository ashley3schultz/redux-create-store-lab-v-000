export default function createStore(reducer) {

  let state = 0

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
}

function render() {
  const container = document.getElementById('container');
}

let store = createStore(changeCount) // createStore takes the changeCount reducer as an argument
store.dispatch({ type: '@@INIT' });
