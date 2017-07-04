'use strict';

const inquirer = require("inquirer");
var fronts = []
var cardCount = 0

function cardInfo(front, back) {
	this.front = front
	this.back = back
}

var front1= new cardInfo ("What is the term for a violation of a criminal law and an act determined by a court to be so (guilty)?", "crime")
var front2= new cardInfo ("What is organized reaction to behaviour viewed as problematic (2 words)?", "social order")
var front3= new cardInfo ("Who investigate crimes?","police")
var front4= new cardInfo ("Where do we determine guilt or innocence?", "court")

fronts.push(front1);
fronts.push(front2);
fronts.push(front3);
fronts.push(front4);



function basicCard() {
	//recursion loop to prompt each question individually w/inquirer
	if(cardCount < fronts.length) {
				inquirer.prompt([
					{
						name: "question",
						message: fronts[cardCount].front
					}
				]).then(function(answer) {
						console.log("Correct Answer:  " + fronts[cardCount].back);
						cardCount ++
						basicCard();
				});//then function

	}//if statement
}

basicCard();