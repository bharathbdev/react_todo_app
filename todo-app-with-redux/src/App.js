import './App.css';
import React from 'react';
import AddTodoForm from './components/addTodoForm';
import TodoList from './components/todoList';
import TotalCompleteItems from './components/totalCompleteItems';
import { Provider, useDispatch, useSelector } from 'react-redux';

import { initStore } from './redux';
const store = initStore();
function App() {
  return (
      <Provider store={store}>
        <div>
          <h1>GOD My Todo List</h1>
          <AddTodoForm />
          <TodoList />
          <TotalCompleteItems />
        </div>
      </Provider>
  );
}

export default App;
