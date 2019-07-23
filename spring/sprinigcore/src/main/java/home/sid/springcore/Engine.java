package home.sid.springcore;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Qualifier;

public class Engine {
    private String type;
    private EnginePart enginePart;

    public Engine() {
    }

    public Engine(String type) {
        this.type = type;
    }

    public String getType() {
        return type;
    }

    public void setType(String type) {
        this.type = type;
    }

    public EnginePart getEnginePart() {
        return enginePart;
    }

    // traditionally: <bean id="" class="" autowire="byName"|"byType"|"constructor">
    // autowire byType would work nly if there is unique bean type
    @Autowired
    // Although both @Qualifier and bean name fallback match can be used to narrow down to a specific bean,
    // autowiring is really all about injection by type
    @Qualifier("enginePart")
    public void setEnginePart(EnginePart enginePart) {
        this.enginePart = enginePart;
    }
}
