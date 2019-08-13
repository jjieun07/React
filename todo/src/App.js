import React, { Component } from 'react';
import PageTemplate from './Component/PageTemplate';
import TodoInput from './Component/TodoInput';
import TodoItem from './Component/TodoItem';

class App extends Component {
  render() {
    return (
      <div>
        <PageTemplate>
          <TodoInput/>
          <TodoItem>할 일 1</TodoItem>
        </PageTemplate>
      </div>
    );
  }
}

export default App;