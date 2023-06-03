var deleteDuplicates = function (head) {
  let newListNode = new ListNode(-101, head);
  let prev = newListNode;
  let cur = newListNode.next;

  while (cur) {
    if (prev.val !== cur.val) {
      prev.next = cur;
      prev = cur;
      cur = cur.next;
    } else {
      cur = cur.next;
    }
  }
  if (cur == null) {
    prev.next = cur;
  }
  return newListNode.next;
};
