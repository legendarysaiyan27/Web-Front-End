console.log("hello world");



function handleSubmit(evt) {
	evt.preventDefault();
	
	alert('Event Submitted');
}


let form = document.querySelector('#contact');

form.addEventListener('submit', handleSubmit);

let image = document.querySelector();

image.addEventListener('mouseover', myFunction);

function myFunction(evt) {
	evt.preventDefault();

	alert('You are Great!');
}