import './App.css';
import { useState } from 'react';
import ReactDOM from 'react-dom'

import Button from './Button';
import ButtonReset from './ButtonReset';
import ButtonSave from './ButtonSave';

function App() {

  const [count, setCount] = useState(0);
  const [list, setList] = useState([]);

  const incrementCount = increment =>  setCount(count+increment)
  
  const resetCounter = () =>  setCount(0)

  const saveResult = () =>  { list.push(count);  setList(list);  }

  return (
    <div className="App">
       <Button increment={1} onClickFunction={incrementCount}/>
       <Button increment={10} onClickFunction={incrementCount}/>
       <Button increment={100} onClickFunction={incrementCount}/>
       <Button increment={1000} onClickFunction={incrementCount}/>
       <br/>
       <Button increment={-1} onClickFunction={incrementCount}/>
       <Button increment={-10} onClickFunction={incrementCount}/>
       <Button increment={-100} onClickFunction={incrementCount}/>
       <Button increment={-1000} onClickFunction={incrementCount}/>
       <br/>
       <ButtonReset onClickFunction={resetCounter}/>
       <br/>
       <ButtonSave onClickFunction={saveResult}/>
       <br/>
       <h1>{count}</h1>
       <br/>
       <h2>{list}</h2>
    </div>
  );
}

const rootElement = document.getElementById('root')
ReactDOM.render(<App />, rootElement)

export default App;

