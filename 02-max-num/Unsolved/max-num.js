// Write code to return the largest number in the given array

var maxNum = function(arr) {
    let finalNumber = arr[0];
    for (var i = 0; i<arr.length; i++){
        if (arr[i]>finalNumber) {
            finalNumber = arr[i]
        }
    } return finalNumber;
};
