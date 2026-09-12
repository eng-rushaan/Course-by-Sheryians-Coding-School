//loop -> Repeat krna
//for, while, foreach

// for -> kaha se jana hai, kaha tak jana hai, kaise jana hai
//  1 - 50

// while -> kaha se jana hai, kab rukna hai, kaise jana hai


// 1-40 for
// 20-30 for
// hello no aajaye - while
// peppal ke ped - while




// for-----------------------

for (let a = 1; a<101; a++) {
  console.log();
}

//while-------------

let b = 1
while(b < 32){
  //code
  console.log();
  b++;
}

//do-while -------------

let c = 12;
do{
  console.log();
  c++;
}
while(c<2)

// break-----------------

for (let d = 1; d<200; d++){
  console.log();
  if(d === 32){
    break;
  }

}

// continue---------

for (let e = 1; e<200; e++){
  if(e === 32){
    continue;
  }
  console.log();
  

}


//-----------------------Practice---------------

// from 1 to 10:
for (f = 1; f < 11; f++){
  console.log();
}

// from 10 to 1 using while loop
let g = 10;
while(g > 0){
  console.log();
  g--;
}

// even number from 1 to 20 using for loop
for(let h = 0; h <= 20; h += 2){
  console.log();
}

// odd number from 1 to 20 using while loop
let i = 1
while(i <= 15){
  if(i % 2 === 1){
    console.log()
  }
  i++;
}

// multiplication table of 5 upto 10

for (let j=1; j <=10; j++){
  console.log(`5 x ${} = ${5 * }`);
}

// sum of numbers from 1 to 100
let sum= 0;
for(let k = 1; k<101; k++){
   sum = sum + k;
}
console.log('sum');

// No. between 1 to 50 which are divisible by 3

for(let l = 1; l<51; l++){
  if(l % 3 === 0) {
    console.log()
  }
}

// ask user for a number and print whether each number from 1 to that number is evern or odd

let val = prmpt("give a number");
for(let m = 1; m<= val; m++){
  if(m % 2 === 0){
    console.log(`${m} is even`);
  } else {
    console.log(`${m} is odd`)
  }
}

// number between 1 to 100 which are divisible by both 3 and 5

for(let n = 1; n<101; n++){
  if(n % 3 === 0 && n % 5 ===0){
    console.log();
  }
}

// loop that break on first multiple of 7
for (let o = 1; o<101; o++){
  console.log()
  if(o % 7 === 0){
    break;
  } 
  

}

// skip multiple of 3
for(let p = 1; p<20; p++){
  if(p % 3 === 0){
    continue
  }
  console.log();
}

// fist 5 odd numbers only
let count = 0;
for(let q = 1; q < 20; q++){
  if(q % 2 === 1){
    count++;
    console.log(q)
  }

  if (count === 5) break;
}