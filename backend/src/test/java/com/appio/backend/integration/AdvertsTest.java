package com.appio.backend.integration;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

import java.util.List;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.web.servlet.MockMvc;

import com.appio.backend.Persistence.Advert.Advert;
import com.appio.backend.Persistence.Advert.AdvertRepository;
import com.appio.backend.Persistence.Seed.Seed;
import com.appio.backend.Persistence.Seed.SeedRepository;
import com.appio.backend.Persistence.User.User;
import com.appio.backend.Persistence.User.UserRepository;

@SpringBootTest
@AutoConfigureMockMvc
public class AdvertsTest {
    @Autowired
    private MockMvc api;
    private AdvertRepository advertRepository;

    private SeedRepository seedRepository;

    private UserRepository userRepository;

    public AdvertsTest(
        @Autowired AdvertRepository advertRepository,
        @Autowired SeedRepository seedRepository,
        @Autowired UserRepository userRepository)
        {
        this.advertRepository = advertRepository;
        this.seedRepository = seedRepository;
        this.userRepository = userRepository;
    }

    @BeforeEach
    public void setup() {
        advertRepository.deleteAll();
        seedRepository.deleteAll();
        userRepository.deleteAll();
    }

    @Test
    public void return_existing_adverts() throws Exception {
        Seed seed1 = new Seed("Zanahoria", "Compra", null, null, "Descripción de zanahoria");
        Seed seed2 = new Seed("Lechuga", "Intercambio", null, null, "Descripción de lechuga");

        seedRepository.saveAll(List.of(
            seed1,
            seed2
        ));
        
        User user1 = new User("name1", "password1", "email1");
        User user2 = new User("name2", "password2", "email2");

        userRepository.saveAll(List.of(
            user1,
            user2
        ));

        advertRepository.saveAll(List.of(
                new Advert(seed1, "Anuncio de la semilla 1", user1, "http://www.imagen1.com"),
                new Advert(seed2, "Anuncio de la semilla 2", user2, "http://www.imagen2.com")));

        api.perform(get("/api/adverts"))
                .andExpectAll(
                        status().isOk(),
                        jsonPath("$", hasSize(2)),
                        jsonPath("$[0].seed.name", equalTo("Zanahoria")),
                        jsonPath("$[0].seed.origin", equalTo("Compra")),
                        jsonPath("$[0].seed.pick_up_date", equalTo(null)),
                        jsonPath("$[0].seed.generation", equalTo(null)),
                        jsonPath("$[0].seed.description", equalTo("Descripción de zanahoria")),
                        jsonPath("$[0].advert_description", equalTo("Anuncio de la semilla 1")),
                        jsonPath("$[0].user.name", equalTo("name1")),
                        jsonPath("$[0].user.password", equalTo("password1")),
                        jsonPath("$[0].user.email", equalTo("email1")),
                        jsonPath("$[0].url_img", equalTo("http://www.imagen1.com")),

                        jsonPath("$[1].seed.name", equalTo("Lechuga")),
                        jsonPath("$[1].seed.origin", equalTo("Intercambio")),
                        jsonPath("$[1].seed.pick_up_date", equalTo(null)),
                        jsonPath("$[1].seed.generation", equalTo(null)),
                        jsonPath("$[1].seed.description", equalTo("Descripción de lechuga")),
                        jsonPath("$[1].advert_description", equalTo("Anuncio de la semilla 2")),
                        jsonPath("$[1].user.name", equalTo("name2")),
                        jsonPath("$[1].user.password", equalTo("password2")),
                        jsonPath("$[1].user.email", equalTo("email2")),
                        jsonPath("$[1].url_img", equalTo("http://www.imagen2.com")));
    }
}
