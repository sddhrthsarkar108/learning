package threading.pc;


import java.util.concurrent.ExecutorService;
import java.util.concurrent.Executors;

public class Sequence {
    static int number = 0;
    static final int PRINT_NUMBERS_UPTO = 10;
    static Object lock = new Object();

    static class SequentialThread implements Runnable {
        int remainder;
        int noOfThreads;
        String name;

        public SequentialThread(String name, int remainder, int noOfThreads) {
            this.name = name;
            this.remainder = remainder;
            this.noOfThreads = noOfThreads;
        }

        @Override
        public void run() {
            while (number < PRINT_NUMBERS_UPTO) {
                synchronized (lock) {
                    while (number % noOfThreads != remainder) { // wait for numbers other than remainder
                        try {
                            lock.wait();
                        } catch (InterruptedException e) {
                            e.printStackTrace();
                        }
                    }

                    System.out.println(name + ", value " + number);
                    number++;
                    lock.notifyAll();
                }
            }
        }
    }

    public static void main(String[] args) {
        int noOfThreads = 4;
        ExecutorService es = Executors.newFixedThreadPool(noOfThreads);

        for(int i=0; i< noOfThreads; i++) {
            es.execute(new SequentialThread("T"+(i + 1), i, noOfThreads));
        }
    }
}