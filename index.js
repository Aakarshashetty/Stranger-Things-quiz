var readline = require("readline-sync");
	const chalk = require('chalk');
	var uName = readline.question("Enter your name: ");
	console.log(chalk.magenta.bold("Welcome "+uName+" !"));
console.log(chalk.bold("Let's check how well do you know about Stranger Things!!!"));
console.log("-------------------------------------------------------");
var score = 0;
	function quiz(question, answer, options){
		
		console.log(chalk.blue.bold(question));
	var index = readline.keyInSelect(options, "Select one option please...");
	if(options[index] == answer){
		console.log(chalk.green("Yesss! you are right"));
		score++;
		console.log(chalk.yellow("Your score is:"));
		console.log("-----------------------------");
	}
		else{
			console.log(chalk.red("Oops! you got it wrong"));
			console.log(chalk.yellow("Your score is:"));
			console.log("-----------------------------");
		}
	}

var questions = [
	{
		question : "What game are the boys playing at the beginning of the series?",
		answer : "Dungeons and Dragons",
		options: ['Chess','Monopoly','Dungeons and Dragons','Frogger']
	},
	{
		question : "Who is taken by the monster in the first episode?",
		answer : "Will Byers",
		options : ['Dustin','lucas','mike','Will Byers']
	},
	{
		question : "What name do the boys give the monster?",
		answer : "The Demogorgon",
		options : ['The Baatezu','The Demogorgon','The Basalisk','The Beholder']
	},
	
]
for( var i=0;i<questions.length;i++){
	var currQuestion = questions[i];
	quiz(currQuestion.question,currQuestion.answer,currQuestion.options);
}
console.log(chalk.yellow.bold("Your total score: "+score));
var highestScore = 
	{
		name : "Aakarsha",
		score : "3"
	}

if(score>=highestScore.score){
	highestScore.score = score;
	console.log(chalk.magenta.bold("Yayy you are true Stranger Things fan, Send your screenshot!"))
}
else{
	console.log(chalk.dim.bold("You didn't got all correct!"));
}

