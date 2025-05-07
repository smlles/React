import React, { useState } from 'react'
import {ListItem, 
        ListItemText, 
        InputBase, 
        Checkbox,
        ListItemSecondaryAction,
        IconButton,
        } from '@mui/material'
import { DeleteOutlined } from '@mui/icons-material';
//현재 파일에서는 checkBox와 label컴포넌트를 만들것
//ListItemSeconaryActtion
//ListItem 내부에서, 택스트나 아이콘 이후 보조 액션 영역을 우측 끝에 고정배치
//반듯이 ListItem의 자식으로만 사용해야 한다.

//IconButton
//아이콘을 클릭 가능한 버튼으로 만들어줌

//deleteOutlined
//mui아이콘 라이브러리에 포함된 휴지통 아이콘 컴포넌트

let Todo = (props) => {

  const editEventHandler = (e) => {
    setItem({...item,title:e.target.value})
  }

  const editItem=props.editItem;
  //App.js서 받은 한가지 목록
  const[item,setItem]= useState (props.item);
  const[readOnly,setReadOnly] = useState(true);

  //true를 false로 바꾸는 turnOffReadOnly 함수 추가
  const turnOffReadOnly = () =>{
    setReadOnly(false);
    
  }
  //변경을 감지하는 함수
  // const handleChange = (e) =>{
  //   setItem({
  //     ...item,
  //     title:e.target.value,
  //   })
  // }
  

  const turnOnReadOnly =(e)=>{
    if(e.key == 'Enter'&& readOnly===false){
      setReadOnly(true);//readOnly true => 읽기만 허용
      editItem(item)
    }

  }
  //삭제함수
  const deleteItem = props.deleteItem;

  const deleteEventHandler = () => {
    deleteItem(item);
  };

  //체크박스 변경함수
  const checkBoxEventHandler = (e) => {
    item.done = e.target.checked;
    editItem(item);
  }

  return(
    //html코드 들어가는 부분
    //속성을 쓸 때 카멜케이스로 작성
    //ex) onclick -> onClick / class ->className
    <ListItem> 
      <Checkbox checked={item.done} onChange={checkBoxEventHandler}/>
      <ListItemText>
        <InputBase 
          inputProps ={{"aria-label" : "naked",readOnly:readOnly}}
          onKeyDown={turnOnReadOnly}
          onClick={turnOffReadOnly}
          onChange={editEventHandler}
          type="text"
          id={item.id}
          name={item.id}
          value={item.title}
          multiline={true}
          fullwidth={true}
          />
      </ListItemText>
      <ListItemSecondaryAction>
        <IconButton aria-label='Delete Todo' onClick={deleteEventHandler}>
          <DeleteOutlined /> {/*얘가 휴지통 버튼임*/}
         </IconButton> 
      </ListItemSecondaryAction>
    </ListItem>
    
  )
}

export default Todo;