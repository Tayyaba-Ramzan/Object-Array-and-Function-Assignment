//                    Object, Array and Function Assignment

// Assignment 1: Building Your Friend List

type Friends = {
    firstName: string;
    lastName: string;
    id: number
}
const people = {
    friends: [] as Friends[]
}

let firstFriend: Friends = {
    firstName: "Aliya",
    lastName: "Amir",
    id: 1
}
let secondFriend: Friends = {
    firstName: "Anabiya",
    lastName: "Hassan",
    id: 2
}
let thirdFriend: Friends = {
    firstName: "Ayesha",
    lastName: "Faisal",
    id: 3
}
people.friends.push(firstFriend,secondFriend,thirdFriend);
console.log(people);

//                   XXXXXXXXXXXXXXXXXXXXX

// Assignment 2:Manipulating an Array: Rearranging Words

const scrambledArray: (string | boolean | number)[] = ["student", "of", true, 123, "am", "a", "GIAIC", "I"];
const convertedArray: string[] = scrambledArray.map(item => item.toString());
const orderedArray: string[] = [];
orderedArray.push(convertedArray.pop() as string);
orderedArray.push(convertedArray.splice(convertedArray.indexOf("am"), 1)[0]);
orderedArray.push(convertedArray.splice(convertedArray.indexOf("a"), 1)[0]);
orderedArray.push(convertedArray.splice(convertedArray.indexOf("student"), 1)[0]);
orderedArray.push(convertedArray.splice(convertedArray.indexOf("of"), 1)[0]);
orderedArray.push(convertedArray.pop() as string);
const resultString: string = orderedArray.join(' ');
console.log(resultString);

//                        XXXXXXXXXXXXXXXXXXXXX

// Assignment 3: Company Product Catalog

const inventory: {
    name: string;
    model: string;
    cost: number;
    quantity: number

}[] = [];
const productOne = { name: "Laptop", model: "ABC123", cost: 1200, quantity: 5 };
const productTwo = { name: "Smartphone", model: "XYZ456", cost: 800, quantity: 10 };
const productThree = { name: "Tablet", model: "PQR789", cost: 300, quantity: 15 };
inventory.push(productOne, productTwo, productThree);
console.log("Quantity of the third product:", inventory[2].quantity);
inventory.push({ name: "Mouse", model: "MNO321", cost: 20, quantity: 50 });
console.log("New product added to inventory", inventory);
console.log("Const of the second product:", inventory[1].cost);

//                        XXXXXXXXXXXXXXXXXXXXX

// Assignment 4: Student List Organizer

interface StudentDetails {
    name: string;
    isSeniorStudent: boolean;
    hasCompletedAssignment: boolean
}
let students: StudentDetails[] = [
    { name: "Tayyaba", isSeniorStudent: true, hasCompletedAssignment: true },
    { name: "Iqra", isSeniorStudent: false, hasCompletedAssignment: true },
    { name: "Huzaifa", isSeniorStudent: true, hasCompletedAssignment: true },
    { name: "Bisma", isSeniorStudent: false, hasCompletedAssignment: true },
    { name: "Asfahan", isSeniorStudent: false, hasCompletedAssignment: true }
]

let findSeniorStudentWithAssignment = (students: StudentDetails[]): StudentDetails[] => {
    return students.filter(student => student.isSeniorStudent && student.hasCompletedAssignment);

}
let updateClassList = (students: StudentDetails[]): StudentDetails[] => {
    return students.filter(student => !student.isSeniorStudent || student.hasCompletedAssignment)
}
console.log("Original Class List:", students);
const seniorStudentWithAssignment = findSeniorStudentWithAssignment(students);
console.log("Senior Student With Assignment:", seniorStudentWithAssignment);
const updatedClassList = updateClassList(students);
console.log("Updated Class List", updatedClassList);

//                        XXXXXXXXXXXXXXXXXXXXX