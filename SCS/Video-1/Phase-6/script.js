// BMI Calculator

function bmi(weight,height){
  return weight / (height*height)
}

let userWeight = parseFloat(prompt("Enter your Weight"));
let userHeight = parseFloat(prompt("Enter your Height"));

let result = bmi(userWeight,userHeight).toFixed(2);
console.log("Your BMI is:"+ result);


// Discount Calculator

function discountCalculator(discount){
  return function (price) {
    return price - price * (discount /100);
  }
}

let tenPercent = discountCalculator(10);
let tewentyPercent = discountCalculator(20);
let fiftyPercent = discountCalculator(50);

let productPrice = prompt("Product Price :") 

console.log("Ten Percent Discounted-Price:" + tenPercent(productPrice));
console.log("Tewenty Percent Discounted-Price:" + tewentyPercent(productPrice));
console.log("fifty Percent Discounted-Price:" + fiftyPercent(productPrice));

// Counter

function counter(){
  let count=0;
  return function (){
    count ++;
    return count;
  }
}

let output = counter();


console.log(output());

// Pure function

function meow(val){
  return val * 2;
}

console.log(meow(5));


//IFI to Isolate

(function (){
  const password =parseInt(prompt("secret password"));
  console.log(password)
})()

console.log(password); // ---> Error