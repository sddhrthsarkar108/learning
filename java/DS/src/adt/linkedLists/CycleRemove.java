package adt.linkedLists;

public class CycleRemove {
    static Node head;

    // Function that detects loop in the list
    int detectAndRemoveLoop(Node node) {
        Node slow = node, fast = node;
        while (slow != null && fast != null && fast.next != null) {
            slow = slow.next;
            fast = fast.next.next;

            // If slow and fast meet at same point then loop is present
            if (slow == fast) {
                slow = node;

                // remove loop
                while (slow.next != fast.next) {
                    slow = slow.next;
                    fast = fast.next;
                }

                /* since fast->next is the looping point */
                fast.next = null; /* remove loop */
                return 1;
            }
        }
        return 0;
    }


    public static void main(String[] args) {
        CycleRemove list = new CycleRemove();
        list.head = new Node(50);
        list.head.next = new Node(20);
        list.head.next.next = new Node(15);
        list.head.next.next.next = new Node(4);
        list.head.next.next.next.next = new Node(10);

        // Creating a loop for testing
        head.next.next.next.next.next = head.next.next;
        list.detectAndRemoveLoop(head);
        System.out.println("Linked List after removing loop : ");
    }
}
