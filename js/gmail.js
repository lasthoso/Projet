function lockAlt() {
	document.getElementById("altgender").readOnly = true;
}

function unlockAlt() {
	document.getElementById("altgender").readOnly = false;
}

function switchSport() {
	document.getElementById("sport").readOnly = !document.getElementById("ot").checked;
}

function check() {
	if(document.getElementById("lastname").value != ""){
		if(document.getElementById("firstname").value != ""){
			if (document.getElementById("altgender").value != "" || document.getElementById("other").checked){
				if (document.getElementById("sport").value != "" || document.getElementById("ot").checked){
					if (document.getElementById("message").value != ""){
						submit();
					}else
					alert("Votre message est vide");
				}else
				alert("Vous n'avez pas rempli le sport alternatif");
			}else
			alert("Vous n'avez pas rempli votre genre");
		}else
		alert("Vous n'avez pas rempli votre prenom");
	}else
	alert("Vous n'avez pas rempli votre nom")
}