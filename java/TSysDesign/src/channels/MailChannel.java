package channels;

import User.User;

public class MailChannel implements IChannel {
    @Override
    public boolean send(User user) {
        System.out.println("send email to user: " + user.getMailId());
        return true;
    }
}
