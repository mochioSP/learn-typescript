"use strict";
// const person: {
//     name: string;
//     age: number;
// }
// const person: {
//     name: string;
//     age: number;
//     hobbies: string[];
//     role: [number, string];
// } = {
//   name: "yota",
//   age: 30,
//   hobbies: ["sports", "cooking"],
//   role: [2, "author"],
// };
// const ADMIN = 0;
// const READ_ONLY = 1;
// const AUTHOR = 2;
var role;
(function (role) {
    role[role["ADMIN"] = 0] = "ADMIN";
    role[role["READ_ONLY"] = 1] = "READ_ONLY";
    role[role["AUTHOR"] = 2] = "AUTHOR";
})(role || (role = {}));
const person = {
    name: "yota",
    age: 30,
    hobbies: ["sports", "cooking"],
    role: role.ADMIN,
};
// person.role.push("admin");
// person.role[1] = 10;
// person.role = [0, "admin", "user"]
let favoriteActivities;
favoriteActivities = ["sports"];
console.log(person.name);
for (const hobby of person.hobbies) {
    console.log(hobby.toLocaleUpperCase());
}
if (person.role === role.ADMIN) {
    console.log("管理者ユーザー");
}
