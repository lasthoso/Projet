var i = 0, j = 1;
function change(){
	var id = setInterval(frame, 5);
	function frame() {
		if (document.getElementById("diapoB").style.opacity <= 0) {
			i++;
			i %= 10;
			j++;
			j %= 10;
			document.getElementById("diapoB").style.backgroundImage = "url(../media/img/quote" + i + ".png)";
			document.getElementById("diapoB").style.opacity = 1;
			document.getElementById("diapoA").style.backgroundImage = "url(../media/img/quote" + j + ".png)";
			clearInterval(id);
		} else {
			document.getElementById("diapoB").style.opacity -= .01;
		}
	}
}
