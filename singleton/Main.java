public class Main {
    public static void main(String[] args) {
        new Main().testSingleton();
    }

    public void testSingleton() {
        Singleton singleton1 = Singleton.getInstance();
        Singleton singleton2 = Singleton.getInstance();

        if (singleton1 == singleton2) {
            System.out.println("Singleton works");
        } else {
            System.out.println("Singleton failed");
        }

    }
}
