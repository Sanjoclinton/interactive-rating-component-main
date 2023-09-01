
let rating; 

function submitRating() {
	if (rating === undefined) { 
		alert("Select a rating");
	} else {
		document.querySelector('.initial-state').style.display = 'none';
		document.querySelector('.final-state').style.display = 'flex';
		document.querySelector('#rating-text').innerHTML = "You selected " + rating + " out of 5";
	}
}


function selectRating(num) {
	const arr = document.querySelectorAll('.circle');
	arr[num].style.backgroundColor = "#959eac";
	arr[num].style.color = 'white';
	console.log("I'M HERE")
	rating = arr[num].innerHTML;
	for (let i = 0; i < arr.length; i++) {
		if ( i !== num ) {
			arr[i].style.backgroundColor = '#252d37';
			arr[i].style.color = 'hsl(217, 12%, 63%)';
		}
	}
}