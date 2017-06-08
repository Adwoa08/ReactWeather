var names = ['Terry', 'Mikel', 'kwame'];

// names.forEach(function(name){
//   console.log('forEach', name);
// });
//
// names.forEach((name) => {
//   console.log('arrowFunction', name)
// });
//
//
// names.forEach((name) => console.log(name));


// var hey = (name) => name + '!';
// console.log(hey('terry'));


// This greet method will console log undefined for the this.name
//But using arrow function we can get it to log the name inside it parent variable;
var person = {
  name: 'Terry',
  greet: function(){
    names.forEach(function (name){
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

person.greet();

//Using arrow functions to fixed the problem
var person = {
  name: 'Terry',
  greet: function(){
    names.forEach((name) => {
      console.log(this.name + ' says hi to ' + name);
    });
  }
}

person.greet();
