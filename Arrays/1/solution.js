class Solution {
    largestElement(nums) {
        let large = nums[0]
        for(let i=1;i<nums.length;i++){
            if(nums[i]> large) large = nums[i]

        }
     return large
    } 
}