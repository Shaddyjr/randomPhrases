var phrases = ["You're nice","You're so smart","I like your hair","You smell like poop","I don't like you","Your hair is a mess"];

setup = function(){
	createCanvas(400,400);
	background(100);
	
	////////////////////////////////////////
	//BONUS FOR MAKING TEXT BETTER LOOKING//
	////////////////////////////////////////

	textAlign(CENTER);
	textSize(50);
	textFont("Times New Roman"); //Arial, Courier New, Georgia, Times New Roman, Trebuchet MS, Verdana
	textStyle(ITALIC); //NORMAL, BOLD, ITALIC
	fill(random(225),random(225),random(225));
	
	////////////////
	//END OF BONUS//
	////////////////

	text(random(phrases), 200,200);
}

//No draw function needed
//If put into draw, will choose a random phrase each loop

// draw = function(){
// 	background(100);
// 	text(random(phrases), 100,100);	
// }

