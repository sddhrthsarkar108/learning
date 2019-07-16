package sorting.quicksort;

public class SiglePivot {
    int partition(int[] arr, int low, int high) {
        int pivot = arr[high];
        int i = low; // index of smaller element
        for (int j = low; j < high; j++) {
            // If current element is smaller than or equal to pivot
            if (arr[j] <= pivot && i != j) {
                // swap arr[i] and arr[j]
                swap(arr, i, j);
                i++;
            }
        }

        // swap arr[i+1] and arr[high] (or pivot)
        swap(arr, i, high);
        return i;
    }

    void swap(int [] arr, int i, int j) {
        arr[i] = arr[i] + arr[j];
        arr[j] = arr[i] - arr[j];
        arr[i] = arr[i] - arr[j];
    }

    void sort(int arr[], int low, int high) {
        if (low < high) {
            /* pi is partitioning index, arr[pi] is
              now at right place */
            int pi = partition(arr, low, high);

            // Recursively sort elements before
            // partition and after partition
            sort(arr, low, pi - 1);
            sort(arr, pi + 1, high);
        }
    }

    void quickSortIterative(int arr[], int l, int h) {
        // Create an auxiliary stack
        int stack[h - l + 1];

        // initialize top of stack
        int top = -1;

        // push initial values of l and h to stack
        stack[++top] = l;
        stack[++top] = h;

        // Keep popping from stack while is not empty
        while (top >= 0) {
            // Pop h and l
            h = stack[top--];
            l = stack[top--];

            // Set pivot element at its correct position
            // in sorted array
            int p = partition(arr, l, h);

            // If there are elements on left side of pivot,
            // then push left side to stack
            if (p - 1 > l) {
                stack[++top] = l;
                stack[++top] = p - 1;
            }

            // If there are elements on right side of pivot,
            // then push right side to stack
            if (p + 1 < h) {
                stack[++top] = p + 1;
                stack[++top] = h;
            }
        }
    }
}
