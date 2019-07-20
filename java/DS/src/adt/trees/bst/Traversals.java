package adt.trees.bst;

import java.util.Deque;
import java.util.LinkedList;
import java.util.Queue;

public class Traversals {
    static void printPreorder(Node node) {
        if (node == null)
            return;
        /* first print data of node */
        System.out.print(node.val + " ");
        /* then recur on left sutree */
        printPreorder(node.left);
        /* now recur on right subtree */
        printPreorder(node.right);
    }

    static void printInorder(Node node) {
        if (node == null)
            return;
        /* first recur on left child */
        printInorder(node.left);
        /* then print the data of node */
        System.out.print(node.val + " ");
        /* now recur on right child */
        printInorder(node.right);
    }

    static void printPostorder(Node node) {
        if (node == null)
            return;
        // first recur on left subtree
        printPostorder(node.left);
        // then recur on right subtree
        printPostorder(node.right);
        // now deal with the node
        System.out.print(node.val + " ");
    }

    static void printLevelOrder(Node node) {
        Queue<Node> queue = new LinkedList<Node>();
        queue.add(node);
        while (!queue.isEmpty()) {
            /* poll() removes the present head*/
            Node tempNode = queue.poll();
            System.out.print(tempNode.val + " ");
            /*Enqueue left child */
            if (tempNode.left != null) {
                queue.add(tempNode.left);
            }
            /*Enqueue right child */
            if (tempNode.right != null) {
                queue.add(tempNode.right);
            }
        }
    }

    static void spiralLevelOrder(Node node) {
        if (node == null)
            return; // NULL check

        // Create two stacks to store alternate levels
        // For levels to be printed from right to left
        Deque<Node> s1 = new LinkedList<>();
        // For levels to be printed from left to right
        Deque<Node> s2 = new LinkedList<>();

        // Push first level to first stack 's1'
        s1.push(node);

        // Keep printing while any of the stacks has some nodes
        while (!s1.isEmpty() || !s2.isEmpty()) {
            // Print nodes of current level from s1 and push nodes of next level to s2
            while (!s1.isEmpty()) {
                Node temp = s1.pop();
                System.out.print(temp.val + " ");

                // Note that is right is pushed before left
                if (temp.right != null)
                    s2.push(temp.right);
                if (temp.left != null)
                    s2.push(temp.left);
            }

            // Print nodes of current level from s2 and push nodes of next level to s1
            while (!s2.isEmpty()) {
                Node temp = s2.pop();
                System.out.print(temp.val + " ");

                // Note that is left is pushed before right
                if (temp.left != null)
                    s1.push(temp.left);
                if (temp.right != null)
                    s1.push(temp.right);
            }
        }
    }
}
