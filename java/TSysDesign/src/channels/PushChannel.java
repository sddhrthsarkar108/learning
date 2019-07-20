package channels;

import User.User;

public class PushChannel implements IChannel {
    @Override
    public boolean send(User user) {
        System.out.println("sms pushed to ip: " + user.getIp());
        return true;
    }
}
