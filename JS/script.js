var dataBase = [
  {
    username: "Jack",
    password: "JackFruit",
  },
];

var newsFeed = [
  {
    username: "John",
    timeline: "It was grate time.",
  },
  {
    username: "Alex",
    timeline: "I wish i knew it.",
  },
  {
    username: "Alexa",
    timeline: "Ask me any thing.",
  },
];

var login = prompt("What is your username?");
var passWord = prompt("What is ur password?");

function signIn(username, password) {
  if (username === dataBase[0].username && password === dataBase[0].password) {
    console.log(newsFeed);
  } else {
    alert("Sorry Wrong username & password");
  }
}
signIn(login, passWord);
