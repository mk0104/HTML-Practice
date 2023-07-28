// make variable to ask question
let userQuestion = "Am i going to be the best? ";
// prints the question from the variable made prev
//console.log(userQuestion);
// make random number from 0 to 8
let randomNumber = Math.floor(Math.random() * 8);
// giving variable to the master to say something thats why we live ""
let master = "";

// answers for questions
switch (randomNumber) {
  case 0:
    0;
    master = "maybe";
    break;
  case 1:
    master = "In future";
    break;
  case 2:
    master = "No";
    break;
  case 3:
    master = "Yes";
    break;
  case 4:
    master = "Never";
    break;
  case 5:
    master = "In dreams";
    break;
  case 6:
    master = "In hell no";
    0;
    break;
  case 7:
    master = "Hahahhahahah";
    break;
}

// prints random answer from the if else statement
console.log(`The master say ${master}`);
