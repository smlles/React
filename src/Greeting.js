import {useState} from 'react'

export function Greeting(props){
  return(
    <p>Hello, {props.name}!</p>
  )
}

export function Farewell(props = {}){
  //구조분해 할 때, =은 대입연산자 아니고, 기본값을 지정하는 역할
  //{x=y} x에 값이 없다면 y를 사용한다.
  const{name = "김철수"} = props;
//const [name,setName] = useState(props.name);
  return(
    <p>Good bye {name}!</p>
  )
}