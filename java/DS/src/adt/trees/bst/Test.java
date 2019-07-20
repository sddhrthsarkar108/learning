package adt.trees.bst;

public class Test {
    public static void main(String[] args) {
        Node root = new Node(10);
        root.insert(2);
        root.insert(5);
        root.insert(1);
        root.insert(15);
        root.insert(12);
        root.insert(16);

        Node n = root.find(2);
        System.out.println("left of 2: " + n.left.val + ", right of 2: " + n.right.val);

        System.out.print("\npre order: ");
        Traversals.printPreorder(root);
        System.out.print("\nin order: ");
        Traversals.printInorder(root);
        System.out.print("\npost order: ");
        Traversals.printPostorder(root);
    }
}
