import {useState} from 'react'

export let Example = () => {

  const[message, setMessage] = useState("Hello, world!");
  const[name,setName] = useState("신창섭");
  const[count,setCount] = useState(0);
  // 얘네들은 setter 함수로 state를 변경하면, 화면에 바로 반영됨
  let element = <p>{message}/{name}</p> //jsx 문법
  let x = 100;
  //일반 자바스크립트 지역변수는 값이 바뀌어도 화면에 렌더링이 일어나지 않는다.


  return (
    <div>
      <p>{x}</p>
      <button onClick={()=>x=500}>Increase</button>
      {element} {/*이런것도 가능 */}
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      {/* 상태는 반듯이 setter를 이용해 변경해야한다 */}
      <button onClick={()=>setMessage("Hello,React")}>Change Message</button>
    </div>
  )
}

