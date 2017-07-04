var inquirer = require("inquirer");
var fronts = [];
var cardCount = 0;
var clozeText

//text is the question; cloze is the answer
function cardInfo(front, back) {
	this.front = front
	this.back = back

}

//make the sentence complete 
cardInfo.prototype.full = function() {
	//show sentence with a blank
	clozeDeleted = this.back
	clozeText = this.front

	//replace the incomplete sentence with the answer (cloze)
	clozeText = clozeText.replace("...", clozeDeleted);

	//show answer
	console.log(clozeText);

}


var front1= new cardInfo ("... is a violation of a criminal law and an act determined by a court to be so (guilty)", "crime")
var front2= new cardInfo ("... (2 words) is organized reaction to behaviour viewed as problematic", "social order")
var front3= new cardInfo ("... investigate crimes","police")
var front4= new cardInfo ("... is where we determine guilt or innocence", "court")

fronts.push(front1);
fronts.push(front2);
fronts.push(front3);
fronts.push(front4);



function basicCard() {
	//recursion loop to prompt each question individually w/inquirer (also using cardCount to print each questin by array position)
	if(cardCount < fronts.length) {

				inquirer.prompt([
					{
						name: "question",
						message: fronts[cardCount].front
					}
				]).then(function(answer) {
						fronts[cardCount].full();
						cardCount ++
						basicCard();

				});//then function

	}//recursion if statement


}//studyfronts function

basicCard();
