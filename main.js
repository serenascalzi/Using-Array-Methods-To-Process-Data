// ANSWER #1
// Calculate Sum of All Prices with Reduce Method
var sum = items.reduce(function(a, b) {
	return a + b.price
}, 0)
// Calculate Average Price Based on Array Length
var avg = sum / items.length
// Convert Number to String with 2 Decimals
var ans1 = avg.toFixed(2)
// Validate Answer by Logging to Console
console.log(ans1)
// Include Answer in Index
const answer1 = document.querySelector('#answer1')
answer1.innerHTML = `The average price is $${ans1}`


// ANSWER #2
// Isolate Items with Filter Method, Transform Items with Map Method, and Convert Array to String with Join Method
var ans2 = items.filter(function(item) {
	return item.price > 14.00 && item.price < 18.00
})
.map(function(item){
	return item.title
})
.join('\n')
// Validate Answer by Logging to Console
console.log(ans2)
// Include Answer in Index
const answer2 = document.querySelector('#answer2')
answer2.innerHTML = `${ans2}`


// ANSWER #3
// Isolate Item with Filter Method, Transform Item with Map Method, and Convert Array to String with Join Method
var ans3 = items.filter(function(item) {
	return item.currency_code == "GBP"
})
.map(function(item) {
	return `${item.title} &pound;${item.price}`	
})
.join('\n')
// Validate Answer by Logging to Console
console.log(ans3)
// Include Answer in Index
const answer3 = document.querySelector('#answer3')
answer3.innerHTML = `${ans3}`


// ANSWER #4
// Isolate Items with Filter Method, Transform Items with Map Method, and Convert Array to String with Join Method
var ans4 = items.filter(function(item) {
	return item.materials.includes("wood")
})
.map(function(item) {
	return `${item.title} is made of wood.`
})
.join('\n')
// Validate Answer by Logging to Console
console.log(ans4)
// Include Answer in Index
const answer4 = document.querySelector('#answer4')
answer4.innerHTML = `${ans4}`


// ANSWER #5
// Isolate Items with Filter Method, Transform Items with Map Method, and Convert Array to String with Join Method
var ans5 = items.filter(function(item) {
	return item.materials.length >= 8
})
.map(function(item) {
	var num = item.materials.length
	var mats = item.materials.join('\n')
	return `${item.title} has ${num} materials: \n${mats}\n`
})
.join('\n')
// Validate Answer by Logging to Console
console.log(ans5)
// Include Answer in Index
const answer5 = document.querySelector('#answer5')
answer5.innerHTML = `${ans5}`


// ANSWER #6
// Isolate Items with Filter Method
var sellerMade = items.filter(function(item) {
	return item.who_made == "i_did"
})
// Calculate Sum Based on Array Length
var ans6 = sellerMade.length
// Validate Answer by Logging to Console
console.log(ans6)
// Include Answer in Index
const answer6 = document.querySelector('#answer6')
answer6.innerHTML = `${ans6} were made by their sellers`