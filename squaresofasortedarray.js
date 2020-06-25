//Objective is to, given a sorted 1-D array, return another 1-D array of the squares
//of the elements in the input sorted.

let arr = [-5,-3,1,4,5]


//O(n) solution that uses a 2-pointer approach and compares the absolute values to
//complete the final array.

let result = []
let left = 0
let right = arr.length - 1

for (let i = arr.length - 1; i >= 0; i--) {
    //Compare the absolute values when filling out the result array
    if (Math.abs(arr[left]) > arr[right]) {
        result[i] = arr[left] * arr[left]
        left++
    } else {
        result[i] = arr[right] * arr[right]
        right--
    }
}

return result