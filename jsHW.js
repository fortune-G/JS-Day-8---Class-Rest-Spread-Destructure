//Class
//lab01
// class Calculator {
//   constructor(_init = 0) {
//     this.value = _init;
//   }

//   add(num) {
//     this.value += num;
//     return this.value;
//   }
//   subtract(num) {
//     this.value -= num;
//     return this.value;
//   }
//   multiply(num) {
//     this.value *= num;
//     return this.value;
//   }
//   divide(num) {
//     this.value /= num;
//     return this.value;
//   }
//   show() {
//     console.log(`Value = ${this.value}`);
//   }
// }
// let x = new Calculator();
// x.show();
// console.log(x.add(10))
// console.log(x.subtract(10))
// console.log(x.multiply(10))
// console.log(x.divide(10))

//lab02
// class Sale{
//     constructor(_name,_amonut,_price){
//         this.name = _name
//         this.amonut = _amonut
//         this.price = _price
//     }
//     calcPrice(){
//         return this.amonut*this.price
//     }
// }

// class Beverage extends Sale{
//     // constructor(){}
// }
// let x = new Beverage('Pepsi',5,20)
// console.log(x.calcPrice())

//isArray
//lab01
// let arr
// let x =(arr)=>{
//     return result = Array.isArray(arr)
// }
// console.log(x([1,2]))

//object keys
//lab01
// let salaries = {
//     John: 100,
//     Ann: 160,
//     Pete: 130
//   };
// let x = value.reduce((acc,curr)=>{
//     return acc += curr
// })
// console.log(x)

//lab02
// function checkEmptyObj(obj) {
//   return Object.keys(obj).length === 0;
// }

// let empty = {};
// let notEmpty = { name: 'John', age: 35 };

// console.log(checkEmptyObj(empty));    // true ว่าง
// console.log(checkEmptyObj(notEmpty)); // false ไม่ว่าง

//Rest parameters
//lab01
// let calMulti = (...nums) =>{
//     let sum = 1
//     for (let num of nums){
//         sum *= num
//     }
//     return sum
// }
// let res = calMulti(1,2,3,4,5,6,7,8,9)
// console.log(res)

//lab02
// let filterOutOdds = (...nums) =>{
//     for(let num of nums){
//     if(nums%2==0){
//     return nums}
//     }
// }
// let res = filterOutOdds(1,2,3,4,5)
// console.log(res)

//lab03
// let mergeObj = (...obj) => {
//   console.log(obj)
//   let empty = {}
//   for (let i = 0; i < obj.length; i++) {
//     Object.assign(empty, obj[i])
//   }
//   return  empty
// }

// let obj1 = {
//   fname: 'xxxxxxx',
//   lname: 'Niam'
// }
// let obj2 = {
//   fname : 'yyyyyy',
//   age : 12
// }
// let result = mergeObj(obj1, obj2)
// console.log(result)

//lab04
// const nums1 = [1, -2, 3, 4];
// const nums2 = [8, 3, -8, 1];
// let nums3 = [-5,...nums1,-6,-1,...nums2]
// console.log(nums3)
// let x = nums3.reduce((acc,curr)=>{
//     return acc += curr
// })
// console.log(x)

//lab05
// let editArr = (arr) => {
//   let newArr = [...arr]
//   newArr[3] = newArr[3] ** 2
//   return newArr
// }

// let arr = [1, 2, 3, 4, 5, 6]
// let result = editArr(arr)
// console.log(result)

//lab06
// let handlePerson = (fname,lname,...hobbies) => {
//   console.log(hobbies)
//   return [fname, lname,...hobbies]
// }
// let result = (handlePerson('yyyy', 'xxxxx', 'gorakod', 'niamthiang', 'swimming'))
// console.log()

//lab07
// doubleAndReturnArgs([1, 2, 3], 4, 4);
// expexted result: [1, 2, 3, 8, 8]
// doubleAndReturnArgs([2], 10, 4);
// expexted result: [2, 20, 8]
// let doubleArr = (arr,...num)=>{
//      doubleArr = num.map((item)=>item*2)
//         return arr.concat(...doubleArr)
// }
// let result = doubleArr([1,2,3],4,4)
// console.log(result)
// let doubleArr1 = (arr,...nums1)=>{
//     doubleArr1 = nums1.map((item)=>item*2)
//        return arr.concat(...doubleArr1)
// }
// let result1 = doubleArr1([2],10,4)
// console.log(result1)

//lab09
// function cloneArray(array) {
//   return [...array];
// }

// const Array1 = [1, 2, 3, 4];
// const clonedArray = cloneArray(Array1);

// console.log(clonedArray); // [1, 2, 3, 4]
// console.log(Array1=== clonedArray);

//lab10
// function cloneObject(obj) {
//   return { ...obj };
// }

// const obj1 = { a: 1, b: 2, c: 3 };
// const clonedObject = cloneObject(obj1);

// console.log(clonedObject);
// console.log(obj1 === clonedObject);

//Destructing
//lab 11
// let [first, second, third] = ['Maya', 'Marisa', 'Chi'];
// console.log(first); // *  Maya
// console.log(second); // ** Marisa
// console.log(third); // *** Chi

//lab12
// let [raindrops, whiskers, ...aFewOfMyFavoriteThings] = [
//   'Raindrops on roses',
//   'whiskers on kittens',
//   'Bright copper kettles',
//   'warm woolen mittens',
// ];
// console.log(raindrops); // * Raindrops on roses
// console.log(whiskers); // ** whiskers on kittens
// console.log(aFewOfMyFavoriteThings); // *** [ Bright copper kettles ,warm woolen mittens]
// // เพราะ 1. raindrops จะได้รับค่า 'Raindrops on roses' ซึ่งเป็นสมาชิกตัวแรกของ array
// // 2. whiskers จะได้รับค่า 'whiskers on kittens' ซึ่งเป็นสมาชิกตัวที่สองของ array
// // 3. ...aFewOfMyFavoriteThings ใช้ rest operator จะเอา Array ค่าถัดจากนั้นมาทั้งหมด

//lab13
// let numbers = [10, 20, 30];
// [numbers[1], numbers[2]] = [numbers[2], numbers[1]];
// console.log(numbers); // * [ 10,30,20 ]
// // เพราะมีการใช้ destructing จะมองเป็นสมบัติของ Array โดย[1]จะถูกแทนด้วย[2],และ[2]จะถูกแทนด้วย[1]
// //  ดังนั้นค่าในตำแหน่งที่ 1 และ 2 จึงมีการสลับกัน(log number จึงได้ตามด้านบน)

//lab14
// let facts = { numPlanets: 8, yearNeptuneDiscovered: 1846 };
// let { numPlanets, yearNeptuneDiscovered } = facts;
// console.log(numPlanets); // * 8  เพราะ numPlanets ถูกกำหนดด้วยค่า 8 จาก object`facts`
// console.log(yearNeptuneDiscovered); // ** 1846 เพราะ yearNeptuneDiscovered ถูกกำหนดด้วยค่า 1846 จาก object`facts`
// // เพราะ ใช้ destructuring assignment เพื่อแยกค่าจาก facts ลงในตัวแปร numPlanets และ`yearNeptuneDiscovered`
// // ดังนั้น, console จะได้ค่าออกมาแบบนี้

//lab15
// let planetFacts = {
//   numPlanets: 8,
//   yearNeptuneDiscovered: 1846,
//   yearMarsDiscovered: 1659,
// };
// let { numPlanets, ...discoveryYears } = planetFacts;
// //เพราะนี่คือการใช้ rest operator ดังนั้น จะมาเป็น object
// console.log(discoveryYears);
// *คำตอบ
// {
//   yearMarsDiscovered: 1659;
//   yearNeptuneDiscovered: 1846;
// }

//lab16
// function getUserData({ firstName, favoriteColor = 'green' }) {
//   return `Your name is ${firstName} and you like ${favoriteColor}`;
// }
// getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' }); // *
// getUserData({ firstName: 'Melissa' }); // **
// getUserData({}); // ***ไม่มีค่าออกมา และฟังก์ชั่นจะ Error เนื่องจาก ไม่มีการกำหนดค่าให้ firstName และ`favoriteColor`
// // 1.

// console.log(getUserData({ firstName: 'Alejandro', favoriteColor: 'purple' })) //"Your name is Alejandro and you like purple"
// console.log(getUserData({ firstName: 'Melissa' })) // "Your name is Melissa and you like green" เพราะ green เป็นค่า default
// console.log(getUserData({}))

//lab17
// let guest = 'Jane';
// let admin = 'Pete';
// [guest, admin] = [admin, guest];

// console.log(guest); // 'Pete'
// console.log(admin); // 'Jane'

//lab18
// function checkAge(user) {
//   const { firstName, lastName, age } = user;

//   if (age > 18) {
//     console.log(`Hi ${firstName} ${lastName}`);
//   } else {
//     console.log('ไม่มีสิทธิ์เข้าใช้');
//   }
// }

// const user1 = { firstName: 'Gorakod', lastName: 'Niamthiang', age: 28 };
// const user2 = { firstName: 'qqqqq', lastName: 'wwwwww', age: 18 };

// checkAge(user1);  //
// checkAge(user2);  // ไม่มีสิทธิ์เข้าใช้งาน

//lab19
// let user = {
//   name: "John",
//   years: 27,
// };

// let { name, years: age, isAdmin = false } = user;
// console.log(name); // 'John'
// console.log(age); // 27
// console.log(isAdmin); // false

//lab21
// let arr = [1, [2, [[[3, 4], 5], 6]]];
// let [ a, [b, [[[c, d], e], f]]] = arr;
// console.log(a)
// console.log(b)
// console.log(c)
// console.log(d)
// console.log(e)
// console.log(f)

//lab22
// const obj = { prop: 5, prop2: 10 };

// const { prop: a, prop2: b } = obj;

// console.log(a); // 5
// console.log(b); // 10

//lab23
// let a, b;
// // { a, b } = { a: 1, b: 2 };  //แบบนี้จะ error

// ({ a, b } = { a: 1, b: 2 });
// console.log(a)  //1
// console.log(b)  //2

//lab24
// const [, , , a, b] = [1, 2, 3];
// console.log(a)  //1 undefined เพราะมีค่ากำหนดแค่ index to 2 ไม่มีตำแหน่งที่ 3 และ 4
// console.log(b)  //2 undefined เพราะมีค่ากำหนดแค่ index to 2 ไม่มีตำแหน่งที่ 3 และ 4

//Lab25
// const q = { prop: 5, prop2: [10, 100] };
// const {
//   prop: x,
//   prop2: [, y],
// } = q;

// console.log(x); // 5
// console.log(y); // 100

//lab26
// const q = {
//   prop: "Hello",
//   prop2: {
//     prop2: {
//       nested: ["a", "b", "c"],
//     },
//   },
// };

// const {
//   prop: x,
//   prop2: {
//     prop2: {
//       nested: [, y,],
//     },
//   },
// } = q;
// console.log(x); // Hello
// console.log(y); // b

//lab27
// const names = [
//   { firstName: "John", lastName: "Doe" },
//   { firstName: "Jack", lastName: "Dann" },
//   { firstName: "Joe", lastName: "Dunne" },
// ];

// for (const { firstName, lastName } of names) {
//   console.log(`${firstName} ${lastName}`);
// }

//lab28
// const users = [
//   { user: "Name1" },
//   { user: "Name2", age: 2 },
//   { user: "Name2" },
//   { user: "Name3", age: 4 }
// ];

// for (const { user, age = 'unknown' } of users) {
//   console.log(`${user} ${age}`);
// }