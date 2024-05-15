/**
 * @param {number[]} nums1
 * @param {number} m
 * @param {number[]} nums2
 * @param {number} n
 * @return {void} Do not return anything, modify nums1 in-place instead.
 */
var merge = function(nums1, m, nums2, n) {
  let nums1Idx = 0, nums2Idx = 0;
  while (nums1Idx < m && nums2Idx < n) {
      if (nums1[nums1Idx + nums2Idx] <= nums2[nums2Idx]) nums1Idx++;
      else {
          nums1.splice(nums1Idx + nums2Idx, 0, nums2[nums2Idx]);
          nums1.pop();
          nums2Idx++;
      }
  }

  while (nums2Idx < n) {
      nums1.splice(nums1Idx + nums2Idx, 0, nums2[nums2Idx]);
      nums1.pop();
      nums2Idx++;
  }
};