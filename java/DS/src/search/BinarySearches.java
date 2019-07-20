package search;

public class BinarySearches {
    static int problamaticBinarySearch(int[] a, int key) {
        int low = 0;
        int high = a.length - 1;

        while (low <= high) {
            // int mid = (low + high) / 2; // may cause overflow
            int mid = low + ((high - low) / 2);
            int midVal = a[mid];

            if (midVal < key)
                low = mid + 1;
            else if (midVal > key)
                high = mid - 1;
            else
                return mid; // key found
        }
        return -(low + 1);  // key not found.
    }

    int binarySearchRecursive(int arr[], int l, int r, int x) {
        if (r >= l) {
            int mid = (l + r) >>> 1; // also works

            // If the element is present at the
            // middle itself
            if (arr[mid] == x)
                return mid;

            // If element is smaller than mid, then
            // it can only be present in left subarray
            if (arr[mid] > x)
                return binarySearchRecursive(arr, l, mid - 1, x);

            // Else the element can only be present
            // in right subarray
            return binarySearchRecursive(arr, mid + 1, r, x);
        }

        // We reach here when element is not present
        // in array
        return -1;
    }
}
