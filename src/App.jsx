import { useState, useRef } from 'react';
import './App.css';

function App() {
  let key = useRef(0);
  const [todo, setTodo] = useState('');
  const [todoList, setTodoList] = useState([]);

  const onChangeTodo = (e) => {
    setTodo(e.target.value);
  };

  const onSubmit = (todo) => {
    onCreate(todo);
  };
  const onCreate = () => {
    console.log(todoList);
    const newItem = {
      key: key.current,
      todo,
    };
    setTodoList([...todoList, newItem]);
    key.current++;
  };

  return (
    <div className='App'>
      <div className='wrap'>
        <input value={todo} onChange={onChangeTodo} type='text'></input>
        <button onClick={onSubmit}>추가하기</button>
        <h1>Todo List</h1>
      </div>
      <div className='TodoList'>
        {todoList.map((it) => (
          <div className='TodoItem' key={it.key}>
            {it.todo}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
