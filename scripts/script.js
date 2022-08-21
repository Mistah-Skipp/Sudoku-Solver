sudokuBoard();


function sudokuBoard(){
var board = [];
    board = [1,2,3,4,5,6];
    console.log("filling board \n")
    for(var k = 0; k < 81;k++){
        board[k] = Math.floor(Math.random()*10 + 1);
        if (board[k] == 10){
            board[k] = 1;
        }
    }

    for(let i = 0 ;i <9; i++){
        for (let j = 0; j < 9; j++) {
            document.getElementById("sudokuBoard").innerHTML += board[i+j];
        }
        document.getElementById("sudokuBoard").innerHTML += '<br>';
        
    }
    // DEBUG DISPLAY
   /* let drawRow = "";
    console.log("displaying table");
    for(var i = 0; i < 9;i++){
        if (i % 3 == 0) {
            for(var l = 0;l < 24; l++){
            drawRow += "-"; 
            }
            drawRow += "\n";
        }
        for(var j = 0;j < 9; j++){
            drawRow += board[i+j]+ " ";
            if (j %3 == 2) {
                drawRow += "| ";
            }
        }
        console.log(drawRow);
        drawRow='';
    }
    
    console.log("end\n");*/
}//EOF sudokuBoard


/*
PLAN:
X-get it to print a 9x9 grid with the numbers from hardcoded list

-Make a working version of sudoku
--learn java applet

-make hard coded tables that i know are solvable and use those as test cases
--have known failure boards to test against invalid board detection

-ask user for board size then allow them to fill in table
--(look into java applet, else convert to js and use html tables)


SUDOKU RULES:
valid numbers == 1->9
no repeating numbers in its row& col
no repeating numbers in local 3x3

*/