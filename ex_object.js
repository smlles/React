//자바 클래스 -> 객체
//js에서는 클래스 없이 객체를 직접 만들 수 있다.

//자바에서 클래스를 먼저 만듦
//필드

//js에서는 key - value로 구성된 프로퍼티의 집합
//프로퍼티의 value로 함수가 올 수 도 있는데, 이러한 함수를
//메서드라고 한다.

//1. 객체 리터럴
//가장 간단하고 직관적인 방법

//public class Person{
//    String name;
//    int age;
//}

// main(){
//  Person p = new Person();
//  p.name = "홍길동";
//  p.age = 30;
//}


const person = {
    name:'홍길동',
    age:30,
    greeting : function(){
        console.log(`안녕 나는 ${this.name}이야`)
    },
    sayBye(){
        console.log('잘가라');
    }
}

console.log(person.name);
console.log(person.age);
person.greeting();
person.sayBye();

//2. new Object() 생성자 사용하기
//js의 내장 생성자인 Object를 호출해
//빈 객체를 만든 뒤 프로퍼티를 추가하는 방식

const obj = new Object();
obj.x = 10; //프로퍼티를 추가
obj.y = 20;

//3. 생성자 함수(Constructor Function)
function User(name,age){
    this.name = name;
    this.age = age;
}

const u1= new User('Bob',25);











