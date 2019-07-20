import User.User;
import clients.Client;
import clients.IClient;

public class Test {
    public static void main(String[] args) {
        IClient client1 = new Client("client 1");
        client1.addUser(new User("sswe@dd.com", 343434, "3.4.5.6"));
        client1.addUser(new User("sewes@dd.com", 3434, "3.4.5.6"));

        IClient client2 = new Client("client 2");
        client2.addUser(new User("sswe@dd.com", 343434, "3.4.5.6"));
        client2.addUser(new User("sewes@dd.com", 3434, "3.4.5.6"));

        NotificationService ns = NotificationService.getInstance();
        ns.subscribe(client1, Plan.SILVER);
        ns.subscribe(client2, Plan.GOLD);

        ns.onChange();
    }
}
