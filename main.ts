// 1st array asignment

let fruits = ["apple","banana","mango","orang"]
console.log(fruits);

//2nd question
let myName = [10,20,30,40,]
console.log(myName);

//3rd question
let thirdFuit = ["apple","banana","mango","orang"]
console.log(thirdFuit[2]);

// 4th question
let myName1 = [10,20,30,40,]
console.log(myName1[1] = 25);

// 5 Question
let fruits1 = ["apple","banana","mango","orang"]
console.log(fruits1.push("grape"));

// 6
let lastFruit = ["apple","banana","mango","orange"]
console.log(lastFruit.pop());

// 7 asign
let firstFruit = ["apple","banana","mango","orange"]
firstFruit.splice(0,1)
console.log(firstFruit);

// 8 asign

let firstFruit1: string[]  = ["apple","banana","mango","orange"];
firstFruit1.unshift("kiwi");
console.log (firstFruit1);

// 9 asign
let firstFruit2: string[]  = ["apple","banana","mango","orange"];
firstFruit2.splice(0,2);
console.log(firstFruit2);

// 10 asign
let firstFruit3: string[]  = ["apple","banana","mango","orange"];
firstFruit3.splice(2,0, "pineapple", "pear");
console.log(firstFruit3);

// 11 asign
let fruits4: string[]  = ["apple","banana","mango","orange"];
let cirtusFruits: string[] = fruits4.slice(0,2);
console.log(cirtusFruits);

// 12 asign
let fruits5: string[]  = ["apple","banana","mango","orange"];
let lastTwoFruit: string[] = fruits5.slice(-2);
console.log(lastTwoFruit);






//Here is a possible solution for the assignment:

//Part 1: Basic Arrays - Product Inventory


type Product = {
  name: string;
  price: number;
  inventory: {
    stock: number;
    colorOptions: string[];
  };
};

const products: Product[] = [
  {
    name: "Product 1",
    price: 100,
    inventory: {
      stock: 10,
      colorOptions: ["blue", "pink", "yellow"],
    },
  },
  {
    name: "Product 2",
    price: 200,
    inventory: {
      stock: 20,
      colorOptions: ["red", "black", "white"],
    },
  },
  {
    name: "Product 3",
    price: 300,
    inventory: {
      stock: 30,
      colorOptions: ["orange", "purple", "green"],
    },
  },
];

function changeColor(product: Product, newColor: string) {
  product.inventory.colorOptions.push(newColor);
  if (newColor === "red") {
    product.price *= 1.1;
  } else if (newColor === "blue") {
    product.price *= 0.95;
  }
}

products.forEach((product) => {
  console.log(`Name: ${product.name}`);
  console.log(`Price: ${product.price}`);
  console.log(`Stock: ${product.inventory.stock}`);
  console.log(`Color Options: ${product.inventory.colorOptions.join(", ")}`);
  console.log();
});


//Part 2: Multi-Dimensional Arrays and Tuples - Student Grades


type Student = {
  name: string;
  grades: number[];
};

const students: Student[] = [
  {
    name: "Student 1",
    grades: [90, 80, 70],
  },
  {
    name: "Student 2",
    grades: [95, 85, 75],
  },
  {
    name: "Student 3",
    grades: [92, 82, 72],
  },
];

function calculateAverageGrade(grades: number[]) {
  return grades.reduce((a, b) => a + b, 0) / grades.length;
}

students.forEach((student) => {
  console.log(`Name: ${student.name}`);
  console.log(`Average Grade: ${calculateAverageGrade(student.grades)}`);
  console.log();
});


//Part 3: Array with Types and Indexing - Employee Salaries


type Employee = {
  name: string;
  hoursWorked: number;
  hourlyRate: number;
  salary: number;
};

const employees: Employee[] = [
  {
    name: "Employee 1",
    hoursWorked: 10,
    hourlyRate: 20,
    salary: 2000,
  },
  {
    name: "Employee 2",
    hoursWorked: 20,
    hourlyRate: 30,
    salary: 3000,
  },
  {
    name: "Employee 3",
    hoursWorked: 30,
    hourlyRate: 40,
    salary: 4000,
  },
];

function calculateSalary(employee: Employee) {
  let salary = employee.salary;
  if (employee.hoursWorked >= 20) {
    salary *= 1.1;
  }
  return salary;
}

employees.forEach((employee) => {
  console.log(`Name: ${employee.name}`);
  console.log(`Salary: ${calculateSalary(employee)}`);
  console.log();
});









































