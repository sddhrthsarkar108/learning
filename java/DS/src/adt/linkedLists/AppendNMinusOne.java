package adt.linkedLists;

public class AppendNMinusOne {
    static void print(Node head) {
        Node n = head;
        while (n != null) {
            System.out.print(n.data + " -> ");
            n = n.next;
        }
    }

    static void process(Node h1) {
        Node h2 = new Node(h1.data);
        Node n = h1.next;

        while(n.next != null) {
            h2.next = new Node(n.data);
            n = n.next;
        }

        n.next = h2;
    }

    public static void main(String[] args) {
        Node head = new Node(1);
        head.next = new Node(2);
        head.next.next = new Node(3);
        head.next.next = new Node(4);
        print(head);
        process(head);
        System.out.println();
        print(head);
    }
}
