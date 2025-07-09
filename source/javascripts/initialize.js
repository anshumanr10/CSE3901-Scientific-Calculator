//Created Sam Cubberly 7 / 8
//Merges all of the classes

equ = new Equation();
equ.equation = [power, "[", 2, ",", 5, "]"];

//mem = new Memory();

//his = new History();

document.addEventListener("DOMContentLoaded", function() {

	updateTheDisplay();

	//Sam's Contributions -- Please don't alter or delete without getting my permission
	document.getElementById("equalButton").addEventListener("click", function() {
		try{
        		val = equ.computeTop()
			if( isNaN(val) ){
				alert("Syntax Error!");
			}else{
			showEqual(val);  //test
			}
		}catch(err){
			alert("Syntax Error!");
		}
	});

	document.getElementById("clearButton").addEventListener("click", function() {
		equ.equation = [];
		updateTheDisplay();
        });

	document.getElementById("deleteButton").addEventListener("click", function(){
		equ.rem_op();
		updateTheDisplay();
	});
	//End of Sam's contributions

});

//Yunfeng Wang
function updateTheDisplay(){
	const screen = document.getElementById("screen");
	screen.innerText = equ.to_s();
}

//Sam Cubberly
function showEqual(val){
	screen = document.getElementById("screen");
	screen.innerText = equ.to_s() + " = " + val;
}
