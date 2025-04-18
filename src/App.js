import { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { Example } from './Example';
import { Greeting,Farewell } from './Greeting';
import {Container,List, Paper} from '@mui/material'
import AddTodo from './AddTodo'

//Container
//레이아웃의 가로폭을 제한하고, 
//중앙정렬 및 기본 패딩을 자동으로 적용해주는 컴포넌트
//maxWidth : 최대 너비 지정 (false는 그냥 다 차지하기)

function App() {
  //하나의 할 일을 객체로 관리 할 것이다.
  //id , title , done 
  const [items, setItem] = useState([ 
//{여기에 아이디 어쩌고 했었음  
//}
  ]) 
  
  //Todo를 직접 추가하기 위한 백엔드 콜을 대신 할 가짜 함수만들기
  const add = (item) => {
    //newItem 객체가 하나의 Todo
    const newItem = {
      ...item,//이자리에 title 들어감
      // 스프레드연산자 ... <- 반복가능객체 (배열)나 객체의 프로퍼티를 펼친다.
      //복사,병합,분해등의 작업을 간결하게 해주는 문법
      id: "ID-" + items.length,
      done:false,
    } 
    //상태를 변화시키는 함수를 호출하면
    //state에 변경 사항이 화면에 적용이 된다.
    setItem(prev => [...prev, newItem]) 
    //prev가 없으면 useState의 초기값으로 들어감
    //있으면 items의 이전 값으로 들어감
    console.log("items : ",[...items,newItem])

  }

  //react는 key속성값을 참조해서  리스트의 요소가 변경 될 경우, 
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
      <Container maxWidth="md">
        <AddTodo add={add}/>
        {/*AddTodo에 add함수 전달 {add : function add(~) {~}*/}
        <div className = "TodoList">
          {todoItems}
        </div>
      </Container>
    </div>
  )
}

export default App;
