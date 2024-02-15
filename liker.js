let randomNumber = Math.floor(Math.random() * (260000 - 220000 + 1)) + 220000;
let timeOutRandomNumber = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
let counter_liker = 0 ;
console.log(randomNumber);
console.log(timeOutRandomNumber)
setInterval(function(){
	randomNumber = Math.floor(Math.random() * (260000 - 220000 + 1)) + 220000;
	setTimeout(function(){
		$('svg[aria-label="Like"]').parentElement.parentElement.click();
		counter_liker++;
		console.log(`${counter_liker} liked. `);
	},timeOutRandomNumber)
	$('svg[aria-label="Next"]').parentElement.parentElement.parentElement.click();
	timeOutRandomNumber = Math.floor(Math.random() * (20000 - 10000 + 1)) + 10000;
} , randomNumber)