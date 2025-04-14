/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
  if (list1 === null && list2 === null) return null;

  let ans = new ListNode();
  let head = ans;

  while (list1 !== null && list2 !== null) {
      if (list1.val < list2.val) {
          ans.val = list1.val;
          list1 = list1.next;
      } else {
          ans.val = list2.val;
          list2 = list2.next;
      }

      if (list1 !== null || list2 !== null) {
          ans.next = new ListNode();
          ans = ans.next;
      }
  }

  while (list1 !== null) {
      ans.val = list1.val;
      list1 = list1.next;

      if (list1 !== null) {
          ans.next = new ListNode();
          ans = ans.next;
      }
  }

  while (list2 !== null) {
      ans.val = list2.val;
      list2 = list2.next;

      if (list2 !== null) {
          ans.next = new ListNode();
          ans = ans.next;
      }
  }


  return head;
};