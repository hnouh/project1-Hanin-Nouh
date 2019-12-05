var parent,children;
var check;
var i=3,j=3, k=3,a=3;  
var x=0;
var countFullBoard=16;

var columnRed=0;
var columnYellow=0;
var diagonalRed=0;
var diagonalYellow=0;
var rowRed=0;
var rowYellow=0;

var bigParent;
var smallChildren;
var sameRow,smallElement;
////////////////////
function refreshPage(){
    window.location.reload();
} 
////////////////////
var currentPlayer="player2";
function switchPlayers(){
    if (currentPlayer === "player2") {
        currentPlayer = 'player1';
    } else {
        currentPlayer = 'player2';
    }
}
//////////////////////
/* function whoWinRow(whatClassR){
sameRow= $(whatClassR);
 for (var r = 0; r < sameRow.length; r++) {
  if($(testimonials[r]).hasClass('red')){
	rowRed++;
		if(rowRed==4){
		alert ("redd win"+rowRed)
	}  
  }
  else if($(testimonials[r]).hasClass('yellow')){
	rowYellow++;
		if(rowYellow==4){
		alert ("yelloww win"+rowYellow)
	}  
  }
} 
} */
/* 
function whoWinRow(whatClassR){
	sameRow=document.getElementsByClassName(whatClassR);
	var numItems = $(whatClassR).length
	alert(numItems)
	$(whatClassR).each(function(){
        // Test if the div element is empty
        if($(whatClassR).hasClass('red')){
        rowRed++;
		if(rowRed==4){
			alert ("Red Win")
		}
        }
		else if($(whatClassR).hasClass('yellow')){
			rowYellow++;
		if(rowYellow==4){
			alert ("Yellow Win")
		} 
        }
    });
	 */
    /* sameRow=document.getElementsByClassName(whatClassR);
	alert($(sameRow).length)
	for (var r = 0; r < 4; r++) {
    if(sameRow[r].hasClass("red")){
		rowRed++;
		r++;
		if(rowRed==4){
			alert ("Red Win")
	}
	}
	else if(sameRow[r].hasClass("yellow")){
		rowYellow++;
		r++;
		if(rowYellow==4){
			alert ("Yellow Win")
	} 
} 
} */
//}
//////////////////////
  function whoWin(whatClassC){
    bigParent=document.querySelector(whatClassC);
	for (var c = 0; c < 4; c++) {
    smallChildren = bigParent.children[x];
    if($(smallChildren).hasClass('red')){
		columnRed++;
		x++;
		if(columnRed==4){
			alert ("Pink Win")
	}
	}
	else if($(smallChildren).hasClass('yellow')){
		columnYellow++;
		x++;
		if(columnYellow==4){
			alert ("Sky blue Win")
	} 
} 
}
}
//////////////////////
//know what was the class of the element that was clicked
$('.board div').click(function(){
		 if(countFullBoard<=0){
				 alert("Tie")  
   }
else{
   var className=$(this).attr('class'); 
////////////////  
   if(className=="container1") {
    parent=document.querySelector('.container1');
	children = parent.children[i];
	if(i>=0){
		if(currentPlayer == 'player1'){
			$(children).addClass("red");
				whoWin(".container1");
				/* whoWinRow(".c1");whoWinRow(".c2");
				whoWinRow(".c3");whoWinRow(".c4");
				 */
				 switchPlayers();
				}
				else{//yellow for player2
				$(children).addClass("yellow");
				whoWin(".container1");
				/* whoWinRow(".c1");whoWinRow(".c2");
				whoWinRow(".c3");whoWinRow(".c4");
				 */
				 switchPlayers();
				}
	i--;	
	countFullBoard--;
	}
	/////////////// 
	else//if(i<0)	
	{
	alert("full for c1");
   }
   }
  ////////////////
  else if(className=="container2"){
    parent=document.querySelector('.container2');
	children = parent.children[j];
	if(j>=0){
		if(currentPlayer == 'player1'){
				$(children).addClass("red");
				whoWin(".container2");
				/* whoWinRow(".c1");whoWinRow(".c2");
				whoWinRow(".c3");whoWinRow(".c4");
				 */
				 switchPlayers();						
				}
				else{//yellow for player2
				$(children).addClass("yellow");
				whoWin(".container2");
				/* whoWinRow(".c1");whoWinRow(".c2");
				whoWinRow(".c3");whoWinRow(".c4");
				 */
				 switchPlayers();		
				}
			j--;	
		countFullBoard--;
	}
	else//if(j<0)
	alert("full for c2");	
  }
  ////////////////////
  else if(className=="container3"){
    parent=document.querySelector('.container3');
	children = parent.children[k];
	if(k>=0){
		if(currentPlayer == 'player1'){
			$(children).addClass("red");
			whoWin(".container3");
				/* whoWinRow(".c1");whoWinRow(".c2");
				whoWinRow(".c3");whoWinRow(".c4");
			 */switchPlayers();						
		}
		else{//yellow for player2
			$(children).addClass("yellow");
			whoWin(".container3");
				/* whoWinRow(".c1");whoWinRow(".c2");
				whoWinRow(".c3");whoWinRow(".c4");
			 */
			 switchPlayers();		
			}
		k--;
		countFullBoard--;
	}
	else//if(k<0)
	alert("full for c3");	
  }
  ///////////////////
  else if(className=="container4"){
    parent=document.querySelector('.container4');
	children = parent.children[a];
	if(a>=0){
		if(currentPlayer == 'player1'){
				$(children).addClass("red");
				whoWin(".container4");
				/* whoWinRow(".c1");whoWinRow(".c2");
				whoWinRow(".c3");whoWinRow(".c4");
				 */switchPlayers();		
				}
				else{//yellow for player2
				$(children).addClass("yellow");
				whoWin(".container4");
				/* whoWinRow(".c1");whoWinRow(".c2");
				whoWinRow(".c3");whoWinRow(".c4");
				 */
				 switchPlayers();		
				}
		a--;
		countFullBoard--;
	}
	else//(a<0)
	alert("full for c4");	
  }
}
});
//////////////////////
$(document).ready(function(){


});//});