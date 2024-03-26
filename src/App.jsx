import { useState } from "react"

function fetchTodos() {
  const result = [];
  for (let i = 0; i < localStorage.length; i++) {
    const value = localStorage.key(i);
    result.push(value);
  }
  return result;
}

function App() {
  // const [count, setCount] = useState(0)
  const [inputText, setInputText] = useState('');
  // const todos = fetchTodos();
  const [todos, setTodos] = useState(fetchTodos());
  const hadndleInput = (event) => {
    console.log(event.target.value)
    const value = event.target.value;
    setInputText(value);
  };
  const handleClick = () => {
    console.log('click')
    localStorage.setItem(inputText, inputText);
    // setInputText('');
    setTodos((currentTodos) => {
      return [...currentTodos, inputText];
    });
    setInputText('');
  };
  const handleRemove = (todo, index) => {
    // console.log('remove', todo, index)
    // todos.splice(index, 1);

    const result = todos.filter((item) => item !== todo);
    setTodos(result);
    localStorage.removeItem(todo);
  };
  return (
    <div>
      <h1>TODO 앱</h1>
      <div>
        <input type="text" value={inputText} onChange={hadndleInput}/>
        <button onClick={handleClick}>add</button>
      </div>
      <div>
        <ul>
          {todos.map((todo, index) => {
            return (
              <li key={index}>
                <span>{todo}</span>
                <button onClick={() => handleRemove(todo,index)}>remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    </div>
  )
}

export default App
