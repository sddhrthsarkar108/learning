package sorting.merge;

class linkedList {
    node merge(node a, node b) {
        /* Base cases */
        if (a == null)
            return b;
        if (b == null)
            return a;

        /* Pick either a or b, and recur */
        if (a.val <= b.val) {
            a.next = merge(a.next, b);
            return a;
        } else {
            b.next = merge(a, b.next);
            return b;
        }
    }

    node sort(node h) {
        // Base case : if head is null
        if (h == null || h.next == null) {
            return h;
        }

        // get the middle of the list
        node middle = getMiddle(h);
        node nextOfMiddle = middle.next;

        // set the next of middle node to null
        middle.next = null;

        // Apply mergeSort on left list
        node left = sort(h);

        // Apply mergeSort on right list
        node right = sort(nextOfMiddle);

        // Merge the left and right lists
        node sortedlist = merge(left, right);
        return sortedlist;
    }

    // Utility function to get the middle of the linked list
    node getMiddle(node h) {
        // Base case
        if (h == null)
            return h;
        node fastptr = h.next;
        node slowptr = h;

        // Move fastptr by two and slow ptr by one
        // Finally slowptr will point to middle node
        while (fastptr != null) {
            fastptr = fastptr.next;
            if (fastptr != null) {
                slowptr = slowptr.next;
                fastptr = fastptr.next;
            }
        }
        return slowptr;
    }

    public static void main(String[] args) {
        linkedList li = new linkedList();
        /*
         * Let us create a unsorted linked list to test the functions
         * created. The list shall be a: 2->3->20->5->10->15
         */
        li.push(15);
        li.push(10);
        li.push(5);
        li.push(20);
        li.push(3);
        li.push(2);

        // Apply merge Sort
        li.head = li.sort(li.head);
        System.out.print("\n Sorted Linked List is: \n");
        li.printList(li.head);
    }

    node head = null;

    // node a, b;
    static class node {
        int val;
        node next;

        public node(int val) {
            this.val = val;
        }
    }

    void push(int new_data) {
        node new_node = new node(new_data);
        new_node.next = head;
        head = new_node;
    }

    // Utility function to print the linked list
    void printList(node headref) {
        while (headref != null) {
            System.out.print(headref.val + " ");
            headref = headref.next;
        }
    }
}