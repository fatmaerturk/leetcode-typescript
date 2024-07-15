function twoSum(nums: number[], target: number): number[] {
    const numMap: Map<number, number> = new Map();
    for (let i = 0; i < nums.length; i++) {
        const difference = target - nums[i];
        if (numMap.has(difference)) {
            return [numMap.get(difference)!, i];
        }
        numMap.set(nums[i], i);
    }
    return [];
};
const nums = [2, 7, 11, 15];
const target = 9;
const result = twoSum(nums, target);
console.log(result); 

const nums2 = [3,2,4], target2 = 6
const result2=twoSum(nums2, target2);
console.log(result2);

const nums3= [3,3], target3 = 6
const result3=twoSum(nums3, target3);
console.log(result3);