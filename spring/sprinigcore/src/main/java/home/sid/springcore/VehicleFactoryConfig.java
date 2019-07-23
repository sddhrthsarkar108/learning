package home.sid.springcore;

import org.springframework.beans.factory.annotation.Configurable;
import org.springframework.context.annotation.Bean;

@Configurable
public class VehicleFactoryConfig {
    @Bean()
    Engine carEngine() {
        Engine e = new Engine();
        // traditionally: <bean id="" class="a.b.C" name="alias"><property name="" value=""|ref=""|idref="" /></bean>
        // for inner bean: <property><bean class="">
        // for alias: <alias name="id" alias=""/>
        // if we use id to refer bean then we can have xml validation
        // for list: <property><list><ref bean="">
        e.setType("car");
        return e;
    }

    @Bean("customCarEngine")
    Engine carEngine1() {
        Engine e = new Engine();
        // traditionally: <bean id="" class="a.b.C" ><property name="" value=""|ref="" /></bean>
        e.setType("car");
        return e;
    }

    @Bean()
    Engine busEngine() {
        Engine e = new Engine();
        e.setType("bus");
        return e;
    }

    @Bean()
    Engine busEngineConstructor() {
        // traditionally: <bean id="" class="a.b.C" ><constructor-arg value="" /></bean>
        // for overloaded constructor if conflict of data type occurs we need to mention "type"
        // we can also define "index"
        return new Engine("bus");
    }

    @Bean
    EnginePart enginePart() {
        return new EnginePart();
    }
}
