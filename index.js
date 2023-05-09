function receivesAFunction(callback) {
  // Call the callback function
  callback();
}



function returnsANamedFunction(){
  function myName(){

  }
  return myName;
}

function returnsAnAnonymousFunction(){
  return function(){

  }
}
