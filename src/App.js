import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { Example } from './Example';
import { Greeting,Farewell } from './Greeting';
import {List, Paper} from '@mui/material'

function App() {
  //하나의 할 일을 객체로 관리 할 것이다.
  //id , title , done 
  const [items, setItem] = useState([
    {
    id : "0", 
    title : "Hello, world 1",
    done:true
  },
  {
    id : "1", 
    title : "Hello, world 2",
    done : false
  }]) //react는 key속성값을 참조해서  리스트의 요소가 변경 될 경우, 
  // 어떤 요소가 변경되었는지 빠르게 파악 할 수 있다.
  //                    //배열의 내용이 있다면 렌더링해라
  //paper 컴퍼넌트 
  //종이같은 표면 효과를 제공하는 컨테이너 컴포넌트
  //elevation (그림자 깊이)를 통해 높낮이를 표현하고
  //배경색과 그림자 효과로 콘텐츠를 돋보이게한다.
  const todoItems = items.length > 0 && 
  <Paper style={{margin: 16}}>
    <List>{/*일련의 항목을 세로로 나열하는 컨테이너 역할*/}
      {items.map((item) => (
        <Todo item={item} key={item.id} />
      ))}
    </List>
  </Paper>
  return (
    <div className="App">
    {/*  <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>*/}
      
      {todoItems}
      
    </div>
  )
}

export default App;
