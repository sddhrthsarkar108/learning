package creational.singleton.threadSafety;

public class DCL {
    private static volatile DCL instance;

    private DCL() {
        // Private constructor prevents instantiation by untrusted callers
    }

    // Double-checked locking
    public static DCL getInstance() {
        if (instance == null) {
            synchronized (DCL.class) {
                if (instance == null) {
                    instance = new DCL();
                }
            }
        }
        return instance;
    }
}
