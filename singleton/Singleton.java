public class Singleton {
    // volatile keyword ensures that multiple threads handle the instance variable
    // correctly
    private static volatile Singleton instance = null;

    private Singleton() {
        // logic here
    }

    public static Singleton getInstance() {
        Singleton result = instance;
        if (result == null) {
            synchronized (Singleton.class) {
                result = instance;
                if (result == null) {
                    instance = result = new Singleton();
                }
            }
        }
        return result;
    }
}