var parent,children;
var i=3,j=3, k=3,a=3;  
var x=0;
var countFullBoard=16;
var columnpink=0;
var columnskyBlue=0;
var diagonalpink=0;
var diagonalskyBlue=0;
var bigParent;
var smallChildren;
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
  function whoWin(whatClassC){
    bigParent=document.querySelector(whatClassC);
	for (var c = 0; c < 4; c++) {
    smallChildren = bigParent.children[x];
    if($(smallChildren).hasClass('pink')){
		columnpink++;
		x++;
		if(columnpink>=4){
			alert ("Pink Win");
			window.location.reload();
	}
	}
	else if($(smallChildren).hasClass('skyBlue')){
		columnskyBlue++;
		x++;
		if(columnskyBlue>=4){
			alert ("Sky blue Win");
			window.location.reload();
	} 
} 
}
}
/////////////////////////////
function whoWinDiagonal(){
	if(currentPlayer == 'player1'){
			if(($('#zone1-1').hasClass('pink'))&&($('#zone2-2').hasClass('pink'))&&
			($('#zone3-3').hasClass('pink'))&&($('#zone4-4').hasClass('pink'))){
		alert("Pink win");
		window.location.reload();
		}
		else if(($('#zone4-1').hasClass('pink'))&&($('#zone3-2').hasClass('pink'))&&
			($('#zone2-3').hasClass('pink'))&&($('#zone1-4').hasClass('pink'))){
		alert("Pink win");
		window.location.reload();
		}
				}
				else{//skyBlue for player2
			    if(($('#zone1-1').hasClass('skyBlue'))&&($('#zone2-2').hasClass('skyBlue'))&&
				($('#zone3-3').hasClass('skyBlue'))&&($('#zone4-4').hasClass('skyBlue'))){
				alert("Sky blue win");
				window.location.reload();
				}
				else if(($('#zone4-1').hasClass('skyBlue'))&&($('#zone3-2').hasClass('skyBlue'))&&
			($('#zone2-3').hasClass('skyBlue'))&&($('#zone1-4').hasClass('skyBlue'))){
		alert("Sky blue win");
		window.location.reload();
		}
				}
	return;
}


//////////////////////
$(document).ready(function(){
//know what was the class of the element that was clicked
$('.board div').click(function(){
		if(countFullBoard==0){
				 alert("Tie")  ;
				 window.location.reload();
   }
else{
   var className=$(this).attr('class'); 
////////////////  

   if(className=="container1") {
    parent=document.querySelector('.container1');
	children = parent.children[i];
	
	if(i>=0){
		if(currentPlayer == 'player1'){
			$(children).addClass("pink");
				whoWin(".container1");
				 whoWinDiagonal();
				 switchPlayers();
				}
				else{//skyBlue for player2
				$(children).addClass("skyBlue");
				whoWin(".container1");
				 whoWinDiagonal();
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
   if(className=="container2"){
    parent=document.querySelector('.container2');
	children = parent.children[j];
	if(j>=0){
		if(currentPlayer == 'player1'){
				$(children).addClass("pink");
				whoWin(".container2");
				 whoWinDiagonal();
				 switchPlayers();						
				}
				else{//skyBlue for player2
				$(children).addClass("skyBlue");
				whoWin(".container2");
				 whoWinDiagonal();
				 switchPlayers();		
				}
			j--;	
		countFullBoard--;
	}
	else//if(j<0)
	alert("full for c2");	
  }
  ////////////////////
   if(className=="container3"){
    parent=document.querySelector('.container3');
	children = parent.children[k];
	if(k>=0){
		if(currentPlayer == 'player1'){
			$(children).addClass("pink");
			whoWin(".container3");
			 whoWinDiagonal();
			 switchPlayers();						
		}
		else{//skyBlue for player2
			$(children).addClass("skyBlue");
			whoWin(".container3");
			 whoWinDiagonal();
			 switchPlayers();		
			}
		k--;
		countFullBoard--;
	}
	else//if(k<0)
	alert("full for c3");	
  }
  ///////////////////
   if(className=="container4"){
    parent=document.querySelector('.container4');
	children = parent.children[a];
	if(a>=0){
		if(currentPlayer == 'player1'){
				$(children).addClass("pink");
				whoWin(".container4");
				 whoWinDiagonal();
				 switchPlayers();		
				}
				else{//skyBlue for player2
				$(children).addClass("skyBlue");
				whoWin(".container4");
				 whoWinDiagonal();
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

});//});