public enum Plan {
    SILVER(49, 10), GOLD(99, 100), PLATINUM(500,1000);

    private int price;
    private int count;

    Plan(int price, int count) {
        this.price = price;
        this.count = count;
    }

    public int getPrice() {
        return price;
    }
}
