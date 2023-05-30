// Write code to return the string "odd" if `num` is an odd number
// and return the string "even" if `num` is an even number

var oddOrEven = function(num) {

    for (var i = 0; i < num.length; i++) {
        let testNum = num[i];
        if (testNum % 2 === 0) {
            return "even"
        }
        
    } return "odd";
};

