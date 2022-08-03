function factorial (n, y) {
    if ((n == 0) || (n == 1)) {
        return 1;
    }else {
        return ((n * factorial(n - 1)) + (y * factorial(y - 1)));
    }

}

console.log (factorial(2, 2));



var sumAll = function(a, b) {

    let sum = 0;    
  
    for (let index = a; index <= b; index++) {   
        sum += index;        
    }
    return sum;
  }
  
  console.log(sumAll(2, 2)); 
  

