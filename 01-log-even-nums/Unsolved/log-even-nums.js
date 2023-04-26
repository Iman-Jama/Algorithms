// Write code to print all even numbers from 0 to `num`
// Assume `num` will be a positive number

var logEvenNums = function(num) {
    for (var i = 0; i <= num; i++){
        var currentNumber = i;

        if (currentNumber % 2 === 0){
            console.log(currentNumber);
        } 
    }   
};



