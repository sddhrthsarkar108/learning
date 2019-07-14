package creational.factory.fm;

abstract class Wheel {
    abstract float getDiameter();
    abstract float getWidth();

    @Override
    public String toString() {
        return "Diameter = " + String.valueOf(this.getDiameter()) + ", Width = " + String.valueOf(this.getWidth());
    }
}

class CarWheel extends Wheel {
    private float diameter;
    private float width;

    CarWheel(float diameter, float width) {
        this.diameter = diameter;
        this.width = width;
    }

    @Override
    public float getDiameter() {
        return diameter;
    }

    @Override
    public float getWidth() {
        return width;
    }
}

class BikeWheel extends Wheel {
    private float diameter;
    private float width;

    BikeWheel(float diameter, float width) {
        this.diameter = diameter;
        this.width = width;
    }

    @Override
    public float getDiameter() {
        return diameter;
    }

    @Override
    public float getWidth() {
        return width;
    }
}
// This pattern encapsulates the object creation by letting subclasses to decide what object to create.
class WheelFactory {
    static Wheel getWheel(String type, float diameter, float width) {
        if("CarWheel".equalsIgnoreCase(type))
            return new CarWheel(diameter, width);
        else if("BikeWheel".equalsIgnoreCase(type))
            return new BikeWheel(diameter, width);
        return null;
    }
}

public class FactoryMethod {
    public static void main(String[] args) {
        Wheel carWheel = WheelFactory.getWheel("Carwheel", 15, 215);
        Wheel bikeWheel = WheelFactory.getWheel("Bikewheel", 18, 245);
        System.out.println("Car wheel specifications:" + carWheel);
        System.out.println("Bike wheel specifications:" + bikeWheel);
    }
}
