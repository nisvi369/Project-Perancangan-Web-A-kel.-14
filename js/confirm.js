// Deklarasi var modal
var modal = document.getElementById("myModal");
var btn = document.getElementById("myBtn");
var span = document.getElementsByClassName("close")[0];

// Membuka modal
btn.onclick = function() {
	modal.style.display = "block";
}

// Menutup modal ketika user klik span (x)
span.onclick = function() {
	modal.style.display = "none";
}

// Menutup ketika klik diluar modal
window.onclick = function(event) {
	if (event.target == modal) {
		modal.style.display = "none";
	}
}