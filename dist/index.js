"use strict";
;
function sumOfage(user1, user2) {
    return user1.age + user2.age;
}
const age = sumOfage({ name: 'John', age: 30 }, { name: 'Jane', age: 25 });
console.log(age); // 45
