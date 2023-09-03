/* 타입 호환(type compatibillity) */

/*
 * 인터페이스
 * 구조적 타이핑
 */

interface Developer {
    name: string;
    skill: string;
}

interface Person {
    name: string;
}

var developer: Developer;
var person: Person;

// 포함하지 않는 속성이 있을 경우 호환되지 않음
// developer = person; // x
person = developer; // o

/**
 * 타입 호환 예제 - 함수, 제네릭
 */

// 함수
var add = function (a: number) {
    // console.log(a);
};

var sum = function (a: number, b: number) {
    // return a + b;
};

sum = add;
// add = sum; //error

/* 제네릭 */
interface Empty<T> {

}

var empty1: Empty<string>;
var empty2: Empty<number>;
empty1 = empty2;
empty2 = empty1;

interface NotEmpty<T> {
    data: T;
}

var notempty1: NotEmpty<string>
var notempty2: NotEmpty<number>

// notempty1 = notempty2; x
// notempty2 = notempty1; x
