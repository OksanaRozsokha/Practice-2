var input = [2, 5, 6, 7, -3];

function maxMinSum(arr) {
    var max = arr[0];
    var min = arr[0];
    var sum = 0;
    var maxIndex;
    var minIndex;
    arr.forEach(function (value, index) {
        if (value > max) {
            max = value;
            maxIndex = index;
        }
        if (value < min) {
            min = value;
            minIndex = index;
        }
        sum += value;
    });

    arr.splice(minIndex, 1);
    arr.splice(maxIndex, 1);

    arr.unshift(max, min);

   return {
       arr: arr,
       min: min,
       max: max,
       sum: sum
   };
}

console.log(maxMinSum(input));



