/**
 * 타입 단언(type assertion)
 * 개발자가 타입을 정확하게 알고 있을때, 지정해줌
 */
var a;
a = 10;
a = 'a';
var b = a as string;

// let div = document.querySelector('div');

// if (div) {
//     div.innerText;
// }

var div = document.querySelector('div') as HTMLDivElement;
div.innerText;


