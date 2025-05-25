console.log("Objects");

const user = {
  fullName: "John Doe",
  age: 30,
  money: 0,
  work: function () {
    console.log(this.fullName + " is working");
    this.money += 50;
  },
  "# some strange property": "some strange value"
};

console.log(user);
console.log(user.fullName);
console.log(user.age);

console.log(user.address); // undefined
// console.log(user.address.toString()); // exception

console.log(user.money);
user.work();
console.log(user.money);

user.money = 5000;
console.log(user.money);

console.log(user["# some strange property"]);
console.log(user["# not exists property"]); // undefined

