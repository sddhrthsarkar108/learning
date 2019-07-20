package clients;

import User.User;
import channels.IChannel;

import java.util.ArrayList;
import java.util.List;

public class Client implements IClient {
    private List<IChannel> channels;
    private List<User> users;
    private String name;

    public Client(String name) {
        this.name = name;
        channels = new ArrayList<>();
        users = new ArrayList<>();
    }

    @Override
    public boolean addChannel(List<IChannel> channel) {
        return channels.addAll(channel);
    }

    @Override
    public void sendNotification() {
        System.out.println(name + " client sending notification to user");
        users.forEach(user -> {
            channels.forEach(channel -> channel.send(user));
        });
    }

    @Override
    public boolean addUser(User user) {
        return users.add(user);
    }
}
