package home.sid.springcore;

import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.AnnotationConfigApplicationContext;

public class Test {
    public static void main(String[] args) {
        // traditionally: BeanFactory bf = new BF(new FileSystemResouce("*.xml"))
        // traditionally: ApplicationContext ac = new ClassPathXmlApplicationContext("*.xml")
        // application context has all the functionality of bean factory + aop + event notification etc
        ApplicationContext context = new AnnotationConfigApplicationContext(VehicleFactoryConfig.class);
        Engine engine = context.getBean("carEngine", Engine.class);
        System.out.println(engine);
        System.out.println(engine.getEnginePart());

        engine = context.getBean("customCarEngine", Engine.class);
        System.out.println(engine);
        System.out.println(engine.getEnginePart());
        // would though exception
        // engine = context.getBean(Engine.class);
        engine = context.getBean("busEngine", Engine.class);
        System.out.println(engine);

        engine = context.getBean("busEngineConstructor", Engine.class);
        System.out.println(engine);
    }
}
