package adt.trees.bst;

public class Node {
    int val;
    Node left, right;

    Node(int val) {
        this.val = val;
    }

    void insert(int i) {
        if (i < val) {
            if (left == null) {
                left = new Node(i);
            } else {
                left.insert(i);
            }
        } else {
            if (right == null) {
                right = new Node(i);
            } else {
                right.insert(i);
            }
        }
    }

    Node find(int i) {
        if (val == i) {
            return this;
        } else if (i < val) {
            if (left == null) {
                return null;
            }

            return left.find(i);
        } else {
            if (right == null) {
                return null;
            }

            return right.find(i);
        }
    }
}
