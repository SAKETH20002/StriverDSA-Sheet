class Solution {
    secondLargestElement(nums) {
       if(nums.length < 2 ) return -1

       let large = -Infinity
        let sec = -Infinity
        for(let i=0;i<nums.length;i++){
           
            if(nums[i]> large){ 
                sec = large
                large = nums[i]
            }
            else if(nums[i]>sec && large !== nums[i]){
                sec = nums[i]
            }
             
        }
     return sec === -Infinity ? -1 : sec
    }
}