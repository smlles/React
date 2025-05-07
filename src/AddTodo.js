import { useState } from 'react'
import { Button, Grid, TextField } from '@mui/material'
import { Margin, PaddingRounded } from '@mui/icons-material'

//Button 
//다양한 스타일(variant) :text, contained, outlined
//색상(color) : 
//크기(size) : small, medium , large
// 를 지원하는 버튼 컴포넌트

//Grid2
//CSS Grid 레이아웃 기반의 그리드 시스템
//Flexbox 기반의 기존 grid보다 행,열 제어가 직관적, 
//rowSpacing,columnSpacing으로 간격을 조절 할 수 있다.
//container : 그리드 컨테이너 설정
//item : 그리드 아이템 설정 (생략해도 자동감지)
//xs(0),sm(600),md(900),lg(1200),xl(1536) : 브레이킹포인트별 차지할 컬럼 수 (기본 12분할)
//브레이킹 포인트 : 화면 너비 기준값
//columns : 총 콜럼수 조정 (기본값 12)
//rowSpacing, columnSpacing : 행 / 열 간격

//TextField
//입력(input),라벨(label),헬퍼텍스트(helperText), 
//에러표시(error)를 한번에 처리해주는 컴포넌트
//variant : 스타일설정
//label : 라벨텍스트
//helperText : 입력하단 도움텍스트
//error : 에러표시 , true만 빨간색 강조
//fullWidth : 가로 100% 여부
//multiline : 여러줄 입력여부
//rows : multiline일 떄 보이는 줄 수
//type : text, password, email등의 입력 타입

//react에서 스타일 줄 때는 js객체형식으로 준다.

//props로 넘어온 내용을 받아서 사용할 준비가 됨
const AddTodo = ({add}) =>{

  const [item, setItem]= useState({title:""});

  const onInputChange = (e) =>{
    setItem({title:e.target.value})
    console.log({title:e.target.value})
  }
  //버튼 눌렀을 때
  const onButtonClick = () =>{
    if(item.title.trim()===''){
      alert('내용을 입력하세요.');
      return;
    }
    //props로 넘어온 add함수를 여기서 호출
    add(item); //add({title : '내용'}) 
    //item에 title: ~~ 라고 되어있긴 한데 초기값이라 안 넘어오는듯?
    setItem({title:""})//함수에 전달하고 나면 입력필드 비우기
  }
  //엔터키 = 버튼과 같은 효과
  const enterKeyEventHandler = (e) => {
    if(e.key == "Enter"){
      onButtonClick();
    }
  }

  return(
    <Grid 
      container 
      style ={ {marginTop : 20} }
      justifyContent="center"
     // alignItems="center"
      >
        <Grid xs={11} md={11} item style={{paddingRight : 16}}> 
          <TextField 
            placeholder='Add todo here' 
            fullWidth 
            value={item.title}
            onChange={onInputChange} //onChange : 사용자가 키보드를 입력하거나, 
            // 어떻게든 값이 바뀌면 실행
            onKeyDown={enterKeyEventHandler}
            />
        </Grid>
        <Grid>
          <Button 
            fullWidth 
            style={{heigth:'100%'}} 
            color="secondary" 
            variant='outlined'
            onClick={onButtonClick}
            >
              +
          </Button>
        </Grid>
    </Grid>
  )
}

export default AddTodo;