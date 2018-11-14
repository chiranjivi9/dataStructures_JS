var str = 'xyz';

function fact(n){
  if(n === 1){
    return n;
  } else if (n === 0){
    return 1;
  } else {
    return (n * fact(n - 1));
  }
}

console.log(fact(5));
