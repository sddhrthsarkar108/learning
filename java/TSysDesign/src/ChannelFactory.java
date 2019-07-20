import channels.IChannel;
import channels.MailChannel;
import channels.PushChannel;
import channels.SMSChannel;

import java.util.ArrayList;
import java.util.List;

public class ChannelFactory {
    public static List<IChannel> getChannels(Plan plan) {
        List<IChannel> channelList = new ArrayList<>();
        if(plan == Plan.SILVER) {
            channelList.add(new MailChannel());
        } else if(plan == Plan.GOLD) {
            channelList.add(new MailChannel());
            channelList.add(new SMSChannel());
        } else if(plan == Plan.PLATINUM) {
            channelList.add(new MailChannel());
            channelList.add(new SMSChannel());
            channelList.add(new PushChannel());
        }

        return channelList;
    }
}
