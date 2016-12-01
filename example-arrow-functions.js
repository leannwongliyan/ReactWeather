var names = ['Andrew', 'Julie', 'Jen'];

// names.forEach(function (name) {
// 	console.log('forEach', name);
// });

// // forEach Andrew
// // forEach Julie
// // forEach Jen

// names.forEach((name) => {
// 	console.log('arrowFunc', name);
// 	console.log('something else');
// 	var x = "something";
// });

// //arrowFunc Andrew
// // something else
// // arrowFunc Julie
// // something else
// // arrowFunc Jen
// // something else

// names.forEach((name) => console.log(name));
// //Andrew
// // Julie
// // Jen

// var returnMe = (name) => name + '!';
// console.log(returnMe('Andrew'));
//Andrew!

// var person = {
// 	name: 'Andrew',
// 	greet: function () {
// 		names.forEach((name) => {
// 			console.log(this.name + 'says hi to ' + name)
// 		});
// 	}
// };

// person.greet();

// Andrewsays hi toAndrew
// Andrewsays hi toJulie
// Andrewsays hi toJen

//addStatement
var addStatement = (a, b) => {
	return a + b;
}

console.log(addStatement(4,7));

//addExpression

var addExpression = (a, b) => a + b;
console.log(addExpression(3,-2));
// function add(a, b) {
// 	return a + b;
// }

// console.log(add(1, 3));
// console.log(add(9, 0));
