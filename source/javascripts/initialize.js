//Created Sam Cubberly 7 / 8
//Merges all of the classes
//Created Oliver Shen 7 / 9
//merged the function button interact to here from funcs.js

let equ = new Equation();

//testing
equ.equation = [log10,"[",power,"[",10,"+",10,",",2,"]","]"
];


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

	//Added by Oliver Shen 7/9 
	//merged the function button interact to here from funcs.js
	const display = document.querySelector('#screen p');
    const funcButtons = document.querySelectorAll("button.function");
    funcButtons.forEach((button) => {
        button.addEventListener("click", () => {
            const value = button.getAttribute("data-value");
            if (funcMap[value]) {
                equ.add_op(funcMap[value]);
                equ.add_op("[");
            } else if (value === ",") {
                equ.add_op(",");
            } else {
                equ.add_op(value);
            }
            updateTheDisplay();
        });
    });
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
