module.exports = function getZerosCount(number, base) {

  let divArray = [];

  for(let i = 2; i <= base; i++) {
  	while(base%i == 0) {
  		divArray.push(i);
  		base = base / i;
  	}
  }

  let max = 2;
  for(let i = 0; i < divArray.length; i++) {
  	if(divArray[i] > max) {
  		max = divArray[i];
  	}
  }

  let maxQ = 0
  for(let i = 0; i < divArray.length; i++) {
  	if(divArray[i] == max) {
  		maxQ++;
  	}
  }

  let counter = 1;
  let result = 0;
  while(number/Math.pow(max, counter) > 1) {
    result += Math.floor(number/Math.pow(max, counter));
    counter++;
  }

  result = Math.floor(result/maxQ);
  return result;

}

