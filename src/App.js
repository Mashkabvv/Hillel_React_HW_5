import React from 'react';
import { Provider } from 'react-redux';
import store from './store';

//Components
import ToDoListWrapper from './Components/ToDoListWrapper'

function App() {
    
  return (
    <Provider store = { store }>
        <ToDoListWrapper />
    </Provider>
  );
}

export default App;
