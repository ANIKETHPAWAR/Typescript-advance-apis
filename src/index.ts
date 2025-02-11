interface User{
    name: string;
    age: number;
};

function sumOfage(user1: User, user2: User): number{
    return user1.age + user2.age;
}
const age = sumOfage({name: 'John', age: 30}, {name: 'Jane', age: 25});
console.log(age); // 45