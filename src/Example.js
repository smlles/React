import {useState} from 'react'

export let Example = () => {

  const[message, setMessage] = useState("Hello, world!");
  const[name,setName] = useState("신창섭");
  const[count,setCount] = useState(0);
  return (
    <div>
      <p>{message}/{name}</p>
      <p>Count: {count}</p>
      <button onClick={()=>setCount(count+1)}>Increase</button>
      {/* 상태는 반듯이 setter를 이용해 변경해야한다 */}
      <button onClick={()=>setMessage("Hello,React")}>Change Message</button>
    </div>
  )
}

