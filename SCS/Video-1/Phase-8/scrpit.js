// Create an object for a student with name, age, and isEnrolled
let obj1 = {
  name : "rushaan",
  age : 15,
  isEnrolled :true,
};

// Access the value of "first-name" from this object:
const user1 = {
  "first-name": "rushaan",
};
user1["first-name"];

// Given a dynamic key let key = "age", how ill you access user[key]
let key = "age";
const user2 = {
  age: 15,
}
user2[key];

// from the object below, print the latitude:
const locations = {
  city: "Sargodha",
  coordinates: {
    lat: 32.08,
    lng: 72.67,
  },
};
locations?.coordinates?.lat;

// Desturcture the city and lat from the location object above.

let {city} = locations;
let {lat} = locations.coordinates;

// Destructure the key "first-name" as a variable alled firstName.

const user3 = {
  "first-name" :"rushaan"
};

let {"first-name": firstName} = user3;

// user for-in to log all keys in this object:
const course1 = {
  title: "JavaScript",
  duration : "4 weeks",
};

for (let key in course1){
  console.log(key);
}

// Use object.entries()to print all key-value pairs as:
//title: JavaScript
//duration : 4 weeks

const course2 = {
  title: "JavaScript",
  duration : "4 weeks",
};

Object.entries(course2).forEach(function (val) {
  console.log(val[0] + ":" + val[1]);
});

// copy this using spread opreator

const original = {a :1, b: 2};
const copy = {...original};

// deep clone list safely

const list = {  info: { score: 80}};
const clone = JSON.parse(JSON.stringify(list));
clone.info.score = 23;

// re-write this safely using optional chaining

const person = {};
console.log(person?.profile?.name);

// use a variable to dynamically assign a property\
const admin = "role";
let objEnd = {
  name : "rushaan",
  [admin]: "admin",
};