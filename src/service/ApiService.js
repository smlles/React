import axios from "axios";
import { API_BASE_URL } from "../api-config";

//비동기 호출을 대신 해주는 메서드
//백엔드에 요청을 대신하는 메서드 만들기
//api : 호출 할 api의 경로(/todo,/users)
//method : http메서드 (GET,POST,PUT,DELETE)
//request : 요청에 담을 데이터(주로 POST,PUT에서 사용)
export function call(api,method,request){
  //기본 옵션 설정
  let options = {
    url : API_BASE_URL+api,
    method : method,
    headers : {
      "Content-Type":"application/json"
    }
    //요청이 있다면 ,data : ~~~
  }
  //false,0,빈문자,null,undefined,NaN -> false
  if(request){
    //JSON.stringify() : 객체를 JSON 문자열로 전환
    options.data=JSON.stringify(request);
  }
  //앞에 설정된 options 객체를 사용하여 axios로 HTTP 요청을 보낸다.
  return axios(options)
  //요청이 성공적으로 처리 된 경우 실행되는 코드
  .then(response=>{
    console.log(response.data);
    return response.data;
  })
  .catch(error=>{
    const m_error=error;
    return m_error;
  })
}