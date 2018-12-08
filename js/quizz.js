function verifyQ() {
	var score = 0;
	if(document.getElementById("q1").value == "8"){
		score++;
		document.getElementById("q1").className = true;
	}else{
		document.getElementById("q1").className = false;
	}
	if(document.getElementById("q2").value == "6"){
		score++;
		document.getElementById("q2").className = true;
	}else{
		document.getElementById("q2").className = false;
	}
	if(document.getElementById("q3").value == "étoile de mer" || document.getElementById("q3").value == "ETOILE DE MER"){
		score++;
		document.getElementById("q3").className = true;
	}else{
		document.getElementById("q3").className = false;
	}
	if(document.getElementById("q4").value == "1"){
		score++;
		document.getElementById("q4").className = true;
	}else{
		document.getElementById("q4").className = false;
	}
	if(document.getElementById("q5").value == "18"){
		score++;
		document.getElementById("q5").className = true;
	}else{
		document.getElementById("q5").className = false;
	}	
	if(document.getElementById("q6").value == "40"){
		score++;
		document.getElementById("q6").className = true;
	}else{
		document.getElementById("q6").className = false;
	}
	if(document.getElementById("q7").value == "4"){
		score++;
		document.getElementById("q7").className = true;
	}else{
		document.getElementById("q7").className = false;
	}	
	if(document.getElementById("q8").value == "60"){
		score++;
		document.getElementById("q8").className = true;
	}else{
		document.getElementById("q8").className = false;
	}
	if(document.getElementById("q9").value == "CMAS" || document.getElementById("q9").value == "cmas"){
		score++;
		document.getElementById("q9").className = true;
	}else{
		document.getElementById("q9").className = false;
	}
	if(document.getElementById("q0").value == "FFESSM" || document.getElementById("q0").value == "ffessm"){
		score++;
		document.getElementById("q0").className = true;
	}else{
		document.getElementById("q0").className = false;
	}
	document.getElementById("phr1").innerHTML = "Vous avez marqué " + score + "/10."
}