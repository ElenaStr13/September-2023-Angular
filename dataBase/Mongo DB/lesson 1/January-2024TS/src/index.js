var func = function (names) {
    console.log(names);
};
func(['max', 'ira']);
func(['dsfd', 'ira']);
func(['dddd', 'ira']);
var user = {
    name: 'Max',
    age: 15,
    house: 20
};
var user2 = {
    name: 'Kira',
    age: 25,
    house: 55
};
var user1 = {
    name: 'max',
    age: 15,
    house: 55,
    data: [1, 2, 3, 4]
};
var user2 = {
    name: 'max',
    age: 15,
    house: 55,
    data: 'ddddd'
};
var users = {
    name: "ssss",
};
var User = /** @class */ (function () {
    function User(name, age) {
        this.name = name;
        this.age = age;
    }
    User.prototype.getName = function () {
        return this.name;
    };
    return User;
}());
var user1 = new User('Max', 15);
console.log(user1.getName());
var users = [
    new User('max', 15),
    new User('kokos', 3),
];
// interface IElectric{
//     enginePower:number;
//
//     getLedStatus():boolean;
// }
//
// class Car implements IElectric{
//     enginePower:number
//     constructor(private seats: number, private brand: string, private year: number, enginePower:number) {
//         this.enginePower = enginePower
//     }
//
//     getLedStatus(): boolean {
//        return true
//     }
//
//     start():void{
//         console.log('RRrrrrrrrrrr');
//     }
//
//     getInfo():void{
//         console.log(`Brand: ${this.brand} -- seats: ${this.seats} --- year: ${this.year}`)
//     }
// }
//
//
// const car = new Car(5, "BMW", 2000);
//
// car.getInfo()
// car.start()
//
//
// // class ElectroCar extends Car{
// //
// //     constructor(seats: number, brand: string, year: number, private enginePower:number) {
// //         super(seats, brand, year);
// //     }
// // }
// abstract class Shape {
//     abstract perimeter(): number;
//
//     abstract area(): number;
// }
//
// class Triangle extends Shape {
//     constructor(private a: number, private b: number, private c: number) {
//         super();
//     }
//
//     perimeter(): number {
//         return this.a * this.b / this.c
//     }
//
//     area(): number {
//         return this.c / this.a + this.b
//     }
// }
//
//
// class Rectangle extends Shape {
//     constructor(private a: number, private b: number) {
//         super();
//     }
//
//     perimeter(): number {
//         return this.a + this.b * 2
//     }
//
//     area(): number {
//         return this.a * this.b
//     }
// }
//
// const shapes:Shape[] = [
//     new Triangle(1,2,3),
//     new Rectangle(2,3),
//     new Triangle(3,4,6)
// ]
//
// for (let shape of shapes) {
//     console.log(shape.constructor['name']);
//     console.log(shape.area());
//     console.log(shape.perimeter());
// }
//
// class AAA extends Shape{
//
//     perimeter(): number {
//         return 0;
//     }
//
//     area(): number {
//         return 0;
//     }
// }
//
// const shape1 = new Shape();
// interface IDog<Type, D>{
//     name:string;
//     age:number;
//     box:Type,
//     asd:D
// }
//
// const dog1:IDog<string[], number> ={
//     name:'max',
//     age:15,
//     box:['2','ddddd'],
//     asd:15
// }
//
// const dog2:IDog<number> = {
//     name:'Rex',
//     age:2,
//     box:888
// }
//
// const dog3:IDog<boolean> = {
//     name:'Sharik',
//     age:1,
//     box:true
// }
