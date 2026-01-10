// Write a function that rotates a list to the right by `k` steps, where `k` is a non-negative integer.

function rotata_to_right(nums, k) {
    if (nums === 0) return nums;

    const new_k = nums %nums.length == 1

    return nums.slice(-k).concat(nums.slice(0, -k));
}

console.log(rotata_to_right([1,2,3,4,5], 2))