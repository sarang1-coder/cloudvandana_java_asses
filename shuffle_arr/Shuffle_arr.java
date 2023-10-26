//A. Create an array with the values (1, 2, 3, 4, 5, 6, 7) and shuffle it.

public class Shuffle_arr{

    public static int[] shuffle(int[] a, int n) {
            int[] arr = new int[2 * n];
            int count = 0;
            for (int i = 0; i < n; i++) {
                arr[count] = a[i];
                arr[count + 1] = a[i + n];
                count += 2;
            }
            return arr;
        }

    public static void main(String[] args) {
        int[] a={1,2,3,4,5,6,7};
        int n=a.length/2;
        int[] ans=shuffle(a,n);
           System.out.println("Shuffle elements are: ");
        for(int i=0;i<ans.length;i++){
            System.out.println(ans[i]);
        }
    }
}

