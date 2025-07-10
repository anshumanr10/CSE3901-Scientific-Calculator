# Project-5-MasterRubyInsane

# Description
Design a web page that looks and behaves like a classic calculator.  

# Managers
Overall project manager: Sam Cubberly  
Meeting manager: Oliver Shen

# Use Cases
- [Basic] Entering Numbers  
    - The user clicks on the number buttons (0-9)  
    - Digits added to equation  
[Basic] Entering Basic Operations and Functions  
    - The user clicks a number, an operator (+, -, *, /), another number  
    - The user clicks a function  
        - Square root, exponentiation  
        - trigonometry  
    - The user clicks a parenthesis  
    - These added to the equation  
- [Basic] Equation Displayed on Screen  
    - The equation being typed can be seen by the user in real time as a string  
- [Basic] Calculation and display  
    - If you hit the equals button, the equation will be computed  
    - The value will be displayed
- [Basic] Memory and history
    - Memory and history stored, and can be shown when their respective buttons
- [Basic] Clearing Input or memory
    - The user clicks the "C" button to clear the current input and display.
    - The user clicks the "MC" button to clear the value stored in memory.
- [Basic] Backspace
    - Allows to remove one character from the display / equation string
- [Optional] Mode switching (e.g., hexadecimal, binary, decimal)
    - Allows to see the value in different modes

# Meeting Reports
**Meeting 1: 7/1**
1. Members Present:  
    - Sam Cubberly, Anshuman Ranjan, Oliver Shen, Yunfeng Wang
2. Goals:  
    - Sam Cubberly: Goals to provide the ideas of UML, let everyone have basic ideas that what we need to code.  
    - Oliver Shen: Share the ideas of use cases, let everyone understand the process clearly  
    - Yunfeng Wang: Get the first sprint done very descriptively and make sure everyone have enough time to deal with each sprints.  
    - Anshuman Ranjan: Divide the sprints evenly, ensure everyone understands the UML clearly.  
3. Meeting Notes:  
    - Spent some time to understand the functionality of the Standard calculator in Microsoft Windows.  
    - Everyone decided what they wanted to do for the first sprint.  
    - Everyone understood the logic and use cases for this project.

**Meeting 2: 7/6 Stand Up**
1. Members Present:   
    - Sam Cubberly, Anshuman Ranjan, Oliver Shen, Yunfeng Wang
2. Goals:
    - We wanted to see how everyone implemented the code, and then make plans to change code.
3. Meeting Notes:
    - The calculator app can already display numbers and operators, and most UI elements are present.
    - There is redundant code in the project, and the team plans to merge repeated logic into one main file.
    - Function computation logic is being improved to support advanced operations like exp, sqrt, and power.
    - History and memory features are still missing their underlying JavaScript implementation.
    - The next sprint will focus on code refactoring, adding missing features, and more thorough testing.

**Meeting 3: 7/7**
1. Members Present:   
    - Sam Cubberly, Anshuman Ranjan, Oliver Shen, Yunfeng Wang
2. Goals:
    - Sam Cubberly - bring ideas about what else we need to complete, for example we need create a initialize and merge all the interact of button in, and also make sure everyone understand the logic of function works.
    - Anshuman Ranjan - Share the idea about History Class	 and suggest how we should fix the redundant code. 
    - Oliver Shen- Confirm whether the logic of the function is what we want, and make sure we should not use “Class”.
    - Yunfeng Wang- Bring ideas about the layout of History and Memory parts.
3. Meeting Notes:
    - We need to complete Top level compute function with to_int, to_float and removeFuncs
    - Make the Maingrid calls more clear with equals, clear, delete.
    - We need to create an initialize and merge all the interact of button in.
    - make sure there is a comma string between the first and second argument if there are multiple arguments, like [ power, "[" , 1 , "," , 2 , "]" ].
    - Need to complete the History and Memory functionary.
    - Redesign the display of History and Memory window, make them have separate banners.

# Contributions
Sam Cubberly:
- JavaScript  
	- Equation.js
		- added a variable to the Equation prototype
		- ComputeTop function
			- computes entire equation, equation prototype function, sets object variables
		- removeFuncs function
			- removes functions in the array
			- arr.indexOf(), arr.slice(), arr.splice()
			- while loop, if-else bock
		- innerBracket function
			- finds innermost functions in equation
			- for loop, switch statements
		- compute function
			- computes PEMDAS in the function
			- recursion, splice, indexOf, Boolean operators
		- innerPar function
			- returns the innermost parentheses' indexes in the equation
	- Initialize.js
		- initialized
			- created instance of Equation
			- added eventListener for "DOMContentLoaded" to load after all DOM loaded, so all buttons can have a valid target
		- buttons
			- equal button
				- computes the equation and outputs
				- document.getElementById, addeventListener, try, catch, alert
			- clear, delete buttons
				- clears, or removes from the equation, respectfully
				- getElementById, called expression object
			- menu button
				- hides or shows the menu on the right
				- used getElementsByClassName, used classList.contains and classList.remove
			- parentheses buttons
				- displays parenthesis on the screen
				- querySelectorAll ==> to get all parenthesis, used getAttribute("data-value") to get either ( or )
			- showEqual
				- shows {expr} = value on screen
				- querySelector and string concatenation
- Html
	- _mainCalls.erb
		- Added the equal, clear, delete, and menu buttons
	- _menu.erb
		- created a class with default display as hidden
		- contains explanations for syntax writing in the project
	- numbers.erb
		- added the open and closing parentheses
- CSS
	- menu.css
		- margin: auto and width: 50% to get the menu centered
		- used hiddenMenu class to hide the menu when it was added
	
Anshuman Ranjan:  

Oliver Shen:  
- Equation.js
    - Let the to_s returns a math expression string for display by using maps functions to symbols, formats commas and brackets
- Funcs.js
    - Create all the function definitions except squared and sqrt
    - Create funcMap to shore all the definitions and will be called after user click the function button.
    - Create funcDisplayName to make sure to_s will call it to make the display of the function more simple.
- Initialize.js
    - Create the interact button of ops and funds, make sure it will show on the screen after click the button, also make sure they will push into array and wait for computing
- Funds.erb/ memory_buttons.erb/ ops.erb
    - Create these 3 erb files, to make sure we have the button
    - Date-value are point to what we have during computing
    - All used class="operator" to make sure they have the same way to display  

Yunfeng Wang:  



# Sprint #1 - Due on 7/3 11:59 pm  
- Yunfeng Wang:  
    - JS: Equation Class: add_op(obj) ;rem_op(); To_s,   
    - JS: Math Class: Square root, Squared  
    - CSS/HTML: MainGrid screen; memory; history  
- Sam Cubberly:   
    - JS: compute function, CSS/HTML: maingrid calls  
- Anshuman Ranjan:   
    - JS: to_int, to_float/ CSS-HTML: MainGrid, Numbers  
- Oliver Shen:   
    - JS: More methods for math, CSS/HTML: ops, funcs  

# Sprint #2 - Due on 7/9 11:59 am  
1. Need Completed:
- Top level compute function ⇒ **Sam Cubberly**
    - To_int ⇒ **Anshuman**  
        - CALL IN computeTop()  
    - To_float ⇒ **Anshuman**
        - CALL IN computeTop()
    - removeFuncs ⇒ **Sam**
- Maingrid calls ⇒ **Sam**
    - Equals, clear, delete  
2. Steps:  
- Main / Initialize ⇒ Interaction.js
    - Initialized equation
    - Initialize history
    - Memory value ⇒ mem
- Click button, shows up on screen
    - Numbers + decimal + negative, operators, functions, parenthesis ⇒ **Sam**
        - Function passing - **Oliver**
            - Square bracket delimeters
            - eft square bracket automatically placed in the queue
        - Example:
            - Hit exponent button
            - “Exp” (object of function type, corresponding to exponent) added to the equation array
            - “[“ added to the equation array
        - Close function button - **Oliver**
            - Automatically adds a square bracket
            - Now array is in the form
                - [ exp , “[“, 8 , “+” , log, “[“ ,  9 , “]”, “]” ]
    - Buttons for special numbers: pi, e ⇒ **Anshuman** does pi, **Sam** does e
    - back, and equal button - **Sam Cubberly**
    - Memory Class- **Yunfeng Wang**
        - Instance variable
            - Mem ⇒ holds the memory value (float)
        - Methods (-M+, M, MC, MS, MR Buttons)
            - save_memory(number)
            - recover_memory
            - add_memory(number)
            - subtract_memory(number)
            - clear_memory()
    - History Class ⇐ **Anshuman Ranjan**
        - Instance variable of value pairs
            - His ⇒ < equationCopy , finalValueCopy >
        - Methods
            - add_history( equation , result ) ⇐ Called by “=” button
            - (sam’s version) give user an index option of which history to add to - equation
            - clear_history()
    - History and Memory are separate banners - **Yunfeng Wang**
        - One or none shows up, not both




# Sprint #3 - Due on 7/9 11:59 pm 
- This is for the final submission
    - Everyone need to update the contributions in README.md
    - Remove the files and codes which aren’t being used anymore
    - Make sure the calculator works good without any bugs.
