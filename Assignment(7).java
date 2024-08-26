public class LargestOfThreeNumbers {
    public static void main(String[] args) {
        int num1 = 12, num2 = 25, num3 = 9; // predefined numbers
        
        int largest;
        if (num1 >= num2 && num1 >= num3) {
            largest = num1;
        } else if (num2 >= num3) {
            largest = num2;
        } else {
            largest = num3;
        }
        
        System.out.println("The largest number is: " + largest);
    }
}
