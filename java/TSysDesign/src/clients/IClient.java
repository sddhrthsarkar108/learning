package clients;

import User.User;
import channels.IChannel;

import java.util.List;

public interface IClient {
    boolean addChannel(List<IChannel> channel);
    void sendNotification();
    boolean addUser(User user);
}
