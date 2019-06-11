package server.util;

public class Util {
    public static int transform(int data) {
        return Character.isLetter(data) ? data ^ ' ' : data;
    }
}
