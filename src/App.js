import { useState,useEffect } from 'react';
import logo from './logo.svg';
import './App.css';
import Todo from './Todo';
import { Example } from './Example';
import { Greeting,Farewell } from './Greeting';
import {Container,List, Paper} from '@mui/material';
import AddTodo from './AddTodo';
import axios from 'axios';
import {call} from './service/ApiService'

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
//최초 랜더링시 1번만 실행
useEffect(()=>{
  //조회
  call("/todo","GET")
    .then(result=>setItem(result))
  

},[]);
  
  
  //Todo를 직접 추가하기 위한 백엔드 콜을 대신 할 가짜 함수만들기
  const add = (item) => { // AddTodo 갔다가 객체를 가지고 돌아왔음
   //DB에 추가하기 위해 백엔드로 데이터를 전달
   //POST요청은 URL에 data가 body로 전달되므로 data값이 필요
   call("/todo","POST",item)
   //call메서드의 결과는 Promise이므로 .then을 이어 쓸 수 있다.
   .then(result=>setItem(result.data))
  //데이터를 추가하고, 전체 데이터를 받아서 state에 세팅하고
  //다시 렌더링이 일어남
  }

  //삭제를 해주는 deleteItem()함수 만들기
  //DB에서 어떻게 했지?
  //delete from 테이블 where id=0; 
  const deleteItem = (item) => {
   call("/todo","DELETE",item)
    .then(result=>setItem(result.data))
  }


  const editItem = (item) => {
   call("/todo","PUT",item)
    .then(result=>setItem(result.data))
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
        <Todo item={item} key={item.id} deleteItem={deleteItem} editItem={editItem}/>
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
