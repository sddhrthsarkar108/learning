package User;

public class User {
    private String mailId;
    private long number;
    private String ip;

    public User(String mailId, long number, String ip) {
        this.ip = ip;
        this.number = number;
        this.mailId = mailId;
    }

    public String getMailId() {
        return mailId;
    }

    public Long getNumber() {
        return number;
    }

    public String getIp() {
        return ip;
    }
}

