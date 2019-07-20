package adt.arrays;

public class MaxSubArray {

    static int maxSum(int [] arr) {
        int max_ending_here = 0, max_so_far = 0, start =0, end = 0, s=0;

        for (int i = 0; i < arr.length; i++) {
            max_ending_here += arr[i];
            // max_so_far must follow max_ending_here, start doesn't change but end updates with iteration
            if (max_ending_here > max_so_far) {
                max_so_far = max_ending_here;
                start = s;
                end = i;
            }
            // s increased to track start of possible max sub array
            if (max_ending_here < 0) {
                max_ending_here = 0;
                s = i + 1;
            }
        }

        System.out.println("start: " + start + ", end: " + end);
        return max_so_far;
    }

    public static void main(String[] args) {
        int[] arr = {-2, -3, 4, -1, -2, 1, 5, -3};
        System.out.println(maxSum(arr));
    }
}
