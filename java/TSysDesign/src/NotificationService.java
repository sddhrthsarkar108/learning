import clients.IClient;

import java.util.List;
import java.util.concurrent.CopyOnWriteArrayList;

public class NotificationService {
    List<IClient> clients = new CopyOnWriteArrayList<>();

    public boolean subscribe(final IClient client, Plan plan) {
        client.addChannel(ChannelFactory.getChannels(plan));
        return clients.add(client);
    }

    public void onChange() {
        clients.forEach(IClient::sendNotification);
    }

    static class InnerHolder {
        private static NotificationService instance = new NotificationService();
    }

    public static NotificationService getInstance() {
        return InnerHolder.instance;
    }
}
