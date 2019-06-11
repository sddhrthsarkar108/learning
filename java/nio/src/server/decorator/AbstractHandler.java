package server.decorator;

import java.io.IOException;

public abstract class AbstractHandler<S> implements Handler<S> {

    private final Handler<S> handler;

    AbstractHandler(Handler<S> handler) {
        this.handler = handler;
    }

    @Override
    public void handle(S s) throws IOException {
        handler.handle(s);
    }
}
