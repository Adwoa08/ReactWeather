// function getTempCallback (location, callback){
//   callback(undefined, 78);// is for the success case. the underfined is basically for the err, 78 is the temp
//   callback("city not found");// this to handle any errors
// }
//
// getTempCallback('Utah', function(err, temp){
//   if(err){
//     console.log('error', err);
//
//   }else{
//     console.log('success', temp);
//   }
// });
//
//
// function getTempPromise (location){
//   return new Promise(function (resolve, reject){
//     setTimeout(function(){
//       resolve(79);
//       reject('City not found');
//     }, 1000);
//   });
// }
//
// getTempPromise('Utah').then(function(temp){
//   console.log('promise success', temp);
// }, function(err){
//   console.log('promise error', err);
// })


function addPromise (a, b){
  return new Promise(function(resolve, reject){
    if(typeof a === "number" && typeof b === "number"){
      resolve(a + b);
    }else{
      reject('A & B needs to be numbers');
    }
  })
}

addPromise(2, 3).then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
addPromise(2, 'terry').then(function(sum){
  console.log('success', sum);
}, function(err){
  console.log('error', err);
});
