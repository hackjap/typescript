/**
 * 제네릭(Generic)
 */

// function logText(text){
//     console.log(text);
//     return text;
// }
//
// logText(10); // 10
// logText('str'); // str
// logText(true); // true

// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
//
// logText<string>('hi')
// logText<boolean>(false)
//

/*
 * 기존 타입 정의 방식과 제네릭의 차이점1
 */

// function logText(text: string) {
//     console.log(text);
//     text.split('').reverse().join();
//     return text;
// }
//
//
// function logNumber(num: number) {
//     console.log(num);
//     return num;
// }

/*
 * 기존 타입 정의 방식과 제네릭의 차이점2 - Union type
 * 함수 파라미터는 해결이 되지만
 * 파라미터의 속성 메소드 문제가 발생
 */

// function logText(text: string | number) {
//     console.log(text);
//     text.split('').reverse().join();
//     return text;
// }
//
// let a = logText('a');
// // a.split('') # error
//
// logText(10);


/**
 * 제네릭의 장점과 타입 추론에서의 이점
 */
// function logText<T>(text: T): T {
//     console.log(text);
//     return text;
// }
//
// let str = logText<string>('a');
// str.trim();
//
// let number = logText<number>(10);
// number.toFixed(0);

/**
 * 인터페이스에 제네릭을 선언하는 방법
 */
// interface  Dropdown {
//     value: string,
//     selected: boolean
// }
//
// const obj: Dropdown = { value: 'abc', selected: false}
//

interface Dropdown<T> {
    value: T,
    selected: boolean
}


const obj: Dropdown<number> = {value: 20, selected: false};


/**
 * 제네릭의 타입 제한 1
 */

// function logTextLength<T>(text:T[]): T[] {
//     console.log(text.length);
//     text.forEach(function (text) {
//         console.log(text);
//     })
//     return text;
// }
//
// logTextLength<string>(['hi', 'abc']); // 3

/**
 * 제네릭 타입 제한 2 - 정의된 타입 이용
 */
interface LengthType {
    length: number;
}

function logTextLength<T extends LengthType>(text: T): T {
    text.length;
    console.log(text);
    return text;
}

logTextLength('a');
console.log({length:10 })

/**
 * 제네릭 타입 제한3 - keyof
 * 확장한 인터페이스들의 타입에서 키 값만 사용할 수 있음
 */

interface ShoppingItem {
    name: string,
    price: number,
    stock: number
}

function getShoppingItemOption<T extends keyof ShoppingItem>(itemOption: T): T {
    return itemOption;
}

// getShoppingItemOption(10);
// getShoppingItemOption<string>('a');
getShoppingItemOption("name")



/**
 * [ 제네릭 실전 예제 ]
 */


