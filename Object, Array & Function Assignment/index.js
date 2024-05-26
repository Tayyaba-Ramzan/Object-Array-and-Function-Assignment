//                    Object, Array and Function Assignment

// Assignment 1: Building Your Friend List
var people = {
    friends: []
};
var firstFriend = {
    firstName: "Aliya",
    lastName: "Amir",
    id: 1
};
var secondFriend = {
    firstName: "Anabiya",
    lastName: "Hassan",
    id: 2
};
var thirdFriend = {
    firstName: "Ayesha",
    lastName: "Faisal",
    id: 3
};
people.friends.push(firstFriend);
people.friends.push(secondFriend);
people.friends.push(thirdFriend);
console.log(people);
//                   XXXXXXXXXXXXXXXXXXXXX
// Assignment 2:Manipulating an Array: Rearranging Words
var scrambledArray = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
var convertedArray = scrambledArray.map(function (item) { return item.toString(); });
var orderedArray = [];
orderedArray.push(convertedArray.pop());
orderedArray.push(convertedArray.splice(convertedArray.indexOf("am"), 1)[0]);
orderedArray.push(convertedArray.splice(convertedArray.indexOf("a"), 1)[0]);
orderedArray.push(convertedArray.splice(convertedArray.indexOf("student"), 1)[0]);
orderedArray.push(convertedArray.splice(convertedArray.indexOf("of"), 1)[0]);
orderedArray.push(convertedArray.pop());
var resultString = orderedArray.join(' ');
console.log(resultString);
//                        XXXXXXXXXXXXXXXXXXXXX
// Assignment 3: Company Product Catalog
var inventory = [];
var productOne = { name: "Laptop", model: "ABC123", cost: 1200, quantity: 5 };
var productTwo = { name: "Smartphone", model: "XYZ456", cost: 800, quantity: 10 };
var productThree = { name: "Tablet", model: "PQR789", cost: 300, quantity: 15 };
inventory.push(productOne, productTwo, productThree);
console.log("Quantity of the third product:", inventory[2].quantity);
inventory.push({ name: "Mouse", model: "MNO321", cost: 20, quantity: 50 });
console.log("New product added to inventory", inventory);
console.log("Const of the second product:", inventory[1].cost);
var students = [
    { name: "Tayyaba", isSeniorStudent: true, hasCompletedAssignment: true },
    { name: "Iqra", isSeniorStudent: false, hasCompletedAssignment: true },
    { name: "Huzaifa", isSeniorStudent: true, hasCompletedAssignment: true },
    { name: "Bisma", isSeniorStudent: false, hasCompletedAssignment: true },
    { name: "Asfahan", isSeniorStudent: false, hasCompletedAssignment: true }
];
var findSeniorStudentWithAssignment = function (students) {
    return students.filter(function (student) { return student.isSeniorStudent && student.hasCompletedAssignment; });
};
var updateClassList = function (students) {
    return students.filter(function (student) { return !student.isSeniorStudent || student.hasCompletedAssignment; });
};
console.log("Original Class List:", students);
var seniorStudentWithAssignment = findSeniorStudentWithAssignment(students);
console.log("Senior Student With Assignment:", seniorStudentWithAssignment);
var updatedClassList = updateClassList(students);
console.log("Updated Class List", updatedClassList);
//                        XXXXXXXXXXXXXXXXXXXXX
