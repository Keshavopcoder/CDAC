public class GoodMorningMessage {
    public static void main(String[] args) {
        int time = 8; // predefined time (24-hour format)
        
        if (time >= 5 && time < 12) {
            System.out.println("Good Morning!");
        } else {
            System.out.println("No Morning Message.");
        }
    }
}
