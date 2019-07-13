package streams;

import java.util.List;

public class Reduce {
    public static void main(String[] args) {
        List<Integer> list = List.of(1, 2, 3, 4);

        System.out.println(list.stream().reduce(0, (a, b) -> a + b));

        System.out.println(list.parallelStream().reduce(1,
                // operation can happen in any thread, so operation must be stateless, associative, non-interfering
                (a, b) -> {
                    System.out.println("accumulator, Current thread: " + Thread.currentThread().getName() + " a: " + a + ", b: " + b);
                    return  a + b;
                }
                )
        );

        System.out.println("*** parallel ***");

        System.out.println(list.parallelStream().reduce(1,
                // operation can happen in any thread, so operation must be stateless, associative, non-interfering
                (a, b) -> {
                    System.out.println("accumulator, Current thread: " + Thread.currentThread().getName() + " a: " + a + ", b: " + b);
                    return  a + b;
                },
                (a, b) -> {
                    System.out.println("Combinator, Current thread: " + Thread.currentThread().getName() + " a: " + a + ", b: " + b);
                    return  a * b;
                }
                )
        );

        System.out.println("*** sequential ***");

        System.out.println(list.stream().reduce(1,
                // operation can happen in any thread, so operation must be stateless, associative, non-interfering
                (a, b) -> {
                    System.out.println("accumulator, Current thread: " + Thread.currentThread().getName() + " a: " + a + ", b: " + b);
                    return  a + b;
                },
                (a, b) -> {
                    System.out.println("Combinator, Current thread: " + Thread.currentThread().getName() + " a: " + a + ", b: " + b);
                    return  a * b;
                }
                )
        );
    }
}
