/**
 *  타입 추론 기본 1
 */

var a = 'abc';

function getB(b) {
    var c = 'hi';

    return b + c;
}

10 + '10';// 1010

/**
 *  타입 추론 기본 2
 */

interface Dropdown<T> {
    value: T;
    title: string;
}


var shoppingItem: Dropdown<string> = {
    value: 'abc',
    title: 'hello',
}

/**
 * 타입 추론 기본 3
 * 복잡한 구조의 타입 추론 방식
 */

interface Dropdown<T> {
    value: T,
    title: string;
}

interface DetailedDropdown<K> extends Dropdown<K>{
    description:  string,
    tag: K
}

var detailedItem: DetailedDropdown<string>= {
    title: 'abc',
    description: 'ab',
    value: 'a',
    tag: 'latest',
}

/**
 * Best Common Type 추론 방식
 */
var arr = [1, 2, true];


