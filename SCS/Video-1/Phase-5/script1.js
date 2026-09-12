// print 1 to 10 using for

for ( let a = 1; a <=10; a++) {
  console.log(a);
}

// print even number between 1 to 20

for ( let b = 1; b < 21; b++){
  if ( b%2 === 0) console.log(b);
}

// use continue to skip a number

for ( let c = 1; c<=20; c++){
  if ( c === 9) continue;
  console.log(c);
}

// 


function guessing() {
  let input = Number(prompt("Guess a number between 1 - 10"));
  let d = Math.floor(Math.random() * 10) + 1;

  if (input === d) {
    console.log("You guessed the right number!");
  } else {
    console.log(`The right number was ${d}`);
  }
}

guessing();



a = input("meow");
