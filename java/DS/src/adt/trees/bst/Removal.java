package adt.trees.bst;

public class Removal {
    static Node delete(Node root, int val) {
        // base case
        if (root == null) {
            return root;
        }

        if (val < root.val) {
            root.left = delete(root.left, val);
        } else if (val > root.val) {
            root.right = delete(root.right, val);
        } else {
            // node with only one child
            if (root.left == null) {
                return root.left;
            } else if (root.right == null) {
                return root.right;
            }

            root.val = findMinInRight(root.right);
            root.right = delete(root.right, root.val);
        }

        return root;
    }

    private static int findMinInRight(Node root) {
        int min = root.val;
        while (root.left != null) {
            min = root.val;
            root = root.left;
        }

        return min;
    }
}
