package server.decorator;

public class ThreadedHandler<S> extends ExceptionTransformHandler<S> {

    public ThreadedHandler(Handler<S> handler) {
        super(handler);
    }

    @Override
    public void handle(S s) {
        new Thread(() -> super.handle(s)).start();
    }
}
