function tipAmount(){
	var perc=document.getElementById("percent").value;
	var payed=document.getElementById("payed").value;
	if (payed == "" || perc == 0){
		alert("You didn't select all componenets! Try again");
		return;
	}
	var total=payed*perc;
	document.getElementById("tip").innerHTML="The total is: "+total;
}