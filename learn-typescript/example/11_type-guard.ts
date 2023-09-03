/**
 * 타입 가드(Type Guard)
 */
interface Developer {
    name: string,
    skill: string;
}

interface Person {
    name: string,
    age: number;
}

function introduce(): Developer | Person {
    return {name : 'Tony',age:33, skill: 'Java'}
}

/**  Grade1: Union Type은 공통 속성만 찾을 수 있음
 * => 특정 속성을 찾을 수 없음
 */
var tony = introduce();
// console.log(tony.skill) error

/** Grade2: 타입 단언을 통해 타입 찾기
 * => 로직이 복잡해짐
 * => 가독성이 떨어짐
 */

if ((tony as Developer).skill) {
    var skill = (tony as Developer).skill;
    console.log(skill);
}else if ((tony as Person).age) {
    var age = (tony as Person).age;
    console.log(age)
}

/**
 *  Grade3: 타입가드 적용
 *  타입가드 정의
 *  target is Developer
 *  분기 처리 시 자동으로 타입을 추론하여 인식
 */


function isDeveloper(target: Person | Developer): target is Developer {
    return (target as Developer).skill !== undefined;
}

if (isDeveloper(tony)) {
    tony.skill
}else {
    tony.age
}
