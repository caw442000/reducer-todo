export const initialState = [{
  item: 'Learn about reducers',
  completed: false, 
  id: Date.now()
}];

export const todoReducer = (state, action) => {
  switch (action.type){
      case 'ADD_TODO': {
        console.log("what is being added", state);
        return [{item: action.payload, completed: false, id: Date.now()}, ...state]
      };
      case 'TOGGLE_COMPLETED': {
        return state.map(item => item.id === Number(action.payload) ? { ...item, completed: !item.completed } : item);
      };
      case 'CLEAR_COMPLETED': {
        return state.filter(item => !item.completed);
      }
      default: {
          return state;
      }
  }
} 