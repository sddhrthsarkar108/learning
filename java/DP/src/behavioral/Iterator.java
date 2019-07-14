package behavioral;

class MenuItem {
    private String name;
    private String description;
    private double price;

    public MenuItem(String name, String description, double price) {
        this.name = name;
        this.description = description;
        this.price = price;
    }

    public String getName() {
        return name;
    }

    public String getDescription() {
        return description;
    }

    public double getPrice() {
        return price;
    }
}

class KlinesIceCreamMenu {
    static final int MAX_ITEMS = 3;
    int numberOfItems = 0;
    private MenuItem[] menuItems;

    public KlinesIceCreamMenu() {
        menuItems = new MenuItem[MAX_ITEMS];

        addItem("Chocolate", "The gold standard, creamy and chocolatey", 3.99);
        addItem("Vanilla", "Anything but boring", 3.99);
        addItem("Mint Chocolate Chip", "Minty, green and amazing", 4.99);
    }

    private void addItem(String name, String description, double price) {
        MenuItem menuItem = new MenuItem(name, description, price);
        if (numberOfItems >= MAX_ITEMS) {
            System.err.println("Sorry we only allow 3 flavors at Kllines");
        } else {
            menuItems[numberOfItems] =  menuItem;
            numberOfItems += 1;
        }
    }

    public Iterator createIterator() {
        return new KlinesIceCreamMenuIterator(menuItems);
    }

}

class KlinesIceCreamMenuIterator implements java.util.Iterator {
    MenuItem[] items;
    int position = 0;

    public KlinesIceCreamMenuIterator(MenuItem[] items) {
        this.items = items;
    }

    public MenuItem next() {
        MenuItem menuItem = items[position];
        position = position + 1;
        return menuItem;
    }

    public boolean hasNext() {
        if (position >= items.length || items[position] == null) {
            return false;
        } else {
            return true;
        }
    }

    public void remove() {
        if (position <=0) {
            throw new IllegalStateException("Can't remove until ")
        }
        if (list[position - 1] != null) {
            for (int i = position - 1; i < (list.length - 1); i++) {
                list[i] = list[i+1];
            }
            list[list.length -1] = null;
        }
    }
}

public class Iterator {
    private Menu klinesMenu;
    private Menu peddlersMenu;

    public OnlineMenu(Menu klinesMenu, Menu peddlersMenu) {
        this.klinesMenu = klinesMenu;
        this.peddlersMenu=  peddlersMenu;
    }

    public void printMenu() {
        Iterator KlinesMenuIterator = klinesMenu.createIterator();
        Iterator PeddlersMenuIterator = peddlersMenu.createIterator();
        printMenu(KlinesMenuIterator);
        printMenu(PeddlersMenuIterator);
    }

    public void printMenu(Iterator iterator) {
        while (iterator.hasNext()) {
            MenuItem menuItem = (MenuItem) iterator.next();
            printMenuItem(menuItem);
        }
    }

    private void printMenuItem(MenuItem menuItem) {
        System.out.println(menuItem.getName());
        System.out.println(menuItem.getDescription());
        System.out.println(menuItem.getPrice());
    }
}
