package channels;

import User.User;

public class SMSChannel implements IChannel {
    @Override
    public boolean send(User user) {
        System.out.println("sms sent to: " + user.getNumber());
        return true;
    }
}
