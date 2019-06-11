package server.decorator;

import java.io.IOException;

public class PrintHandler<S> extends AbstractHandler<S> {

    public PrintHandler(Handler<S> handler) {
        super(handler);
    }

    @Override
    public void handle(S s) throws IOException {
        System.out.println("Connected to " +  s);

        try {
            super.handle(s);
        } finally {
            System.out.println("Disconnected from " + s);
        }
    }
}
