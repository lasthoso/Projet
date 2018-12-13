var i = 0, j = 1;
change();
function change(){
	var id = setInterval(frame, 5);
	function frame() {
		if (document.getElementById("diapoB").style.opacity <= 0) {
			i++;
			i %= 14;
			j++;
			j %= 14;
			document.getElementById("diapoB").style.backgroundImage = "url(../media/img/diapo/image" + i + ".png)";
			document.getElementById("diapoB").style.opacity = 1;
			document.getElementById("diapoA").style.backgroundImage = "url(../media/img/diapo/image" + j + ".png)";
			clearInterval(id);
		} else {
			document.getElementById("diapoB").style.opacity -= .01;
		}
	}
}
