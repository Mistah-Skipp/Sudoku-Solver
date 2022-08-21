$("body").on('click', '#submit', function(){
        var bSize = document.querySelector('#boardSize').value;
    console.log(bSize);
    if(bSize >= 3){
        //demo building, random num gen for table
        var randomNum = [];
        for(var k = 0; k < bSize**2;k++){
        randomNum[k] = Math.floor(Math.random()*10 + 1);
        if (randomNum[k] == 10){
            randomNum[k] = 1;
        }
    }
        
        //constructor to make the designated board size
        var tableConstructor ="<table id=\"generatedBoard\">";
        for(var i = 0; i <bSize;i++){
            tableConstructor +="<tr>";
            for(var j = 0;j <bSize;j++){
                tableConstructor +="<td>"+randomNum[i+j]+"</td>";
            }        
            tableConstructor +="</tr>";
        }
        tableConstructor+= "</table>";
        document.getElementById("board").innerHTML = tableConstructor;
    } else {alert("board size is to small");}
        
    
})

//var array_td = document.getElementById('id33322010100167').getElementsByTagName("td");
/*for concept purposes, after the table is generated run a new script that paste what numbers are & related child node from TL -> BR

then make table td be user entries, repeat curr proccess w/ submit and a pasting numbers & related child nodes

after that 
*/