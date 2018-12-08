package ion.lab.sid.rest.controller;

import ion.lab.sid.dao.DaoTest;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class Controller {

    @GetMapping
    public String check() {
        DaoTest daoTest = new DaoTest();
        return "OK";
    }
}
