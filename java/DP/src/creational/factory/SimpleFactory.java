package creational.factory;

// product
interface Wheel {
    float getDiameter();
    float getWidth();
}

class CarWheel implements Wheel {
    float diameter;
    float width;

    CarWheel(float diameter, float width) {
        this.diameter = diameter;
        this.width = width;
    }

    public float getDiameter() {
        return diameter;
    }

    public float getWidth() {
        return width;
    }
}

// Simple factory generates an instance of an object/service for client without exposing any implementation to the client.
// Simple factory pattern can be used when creation of an object involves some business logic beyond initialization. It helps in hiding such logic from it.
class WheelFactory {
    public static Wheel makeWheel (float diameter, float width) {
        return new CarWheel(diameter, width);
    }
}

public class SimpleFactory {
    public static void main(String[] args) {
        Wheel carWheel = WheelFactory.makeWheel(15, 215);
        System.out.println(carWheel.getDiameter());
        System.out.println(carWheel.getWidth());
    }
}
