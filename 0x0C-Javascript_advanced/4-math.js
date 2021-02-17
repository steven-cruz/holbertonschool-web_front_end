// divideBy function that takes firstNumber as argument
function divideBy(firstNumber){

    /*
      returns a function that takes a secondNumber argument
      and returns the second number divided by the first
    */
    return function(secondNumber){
      return secondNumber / firstNumber;
    }
  }
  
  
  // addBy function that takes firstNumber as argument
  function addBy(firstNumber){
    return function(secondNumber){
      return firstNumber + secondNumber;
    }
  }
  
  // Closures
  let addBy100 = addBy(100);
  addBy100();
  
  let addBy1000 = addBy(1000);
  addBy1000();
  
  let divideBy10 = divideBy(10);
  divideBy10();
  
  let divideBy100 = divideBy(100);
  divideBy100();
  