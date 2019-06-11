package server.decorator;

import server.util.Util;

import java.io.IOException;
import java.io.InputStream;
import java.io.OutputStream;
import java.net.Socket;

public class TransformHandler implements Handler<Socket> {

    @Override
    public void handle(Socket socket) throws IOException {
        try (socket;
             InputStream is = socket.getInputStream();
             OutputStream os = socket.getOutputStream()
        ) {
            int data;

            while ((data = is.read()) != -1) {
                os.write(Util.transform(data));
            }
        }
    }
}
