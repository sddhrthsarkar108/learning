package server.decorator;

import java.io.IOException;
import java.io.UncheckedIOException;

public class ExceptionTransformHandler<S> extends AbstractHandler<S> {

    ExceptionTransformHandler(Handler<S> handler) {
        super(handler);
    }

    @Override
    public void handle(S s) {
        try {
            super.handle(s);
        } catch (IOException ex){
            throw new UncheckedIOException(ex);
        }
    }
}
