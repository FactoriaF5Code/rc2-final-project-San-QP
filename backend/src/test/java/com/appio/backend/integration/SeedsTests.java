package com.appio.backend.integration;

import static org.hamcrest.Matchers.equalTo;
import static org.hamcrest.Matchers.hasSize;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.delete;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;

import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.boot.test.autoconfigure.web.servlet.AutoConfigureMockMvc;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.MediaType;

import com.appio.backend.Persistence.Seed;
import com.appio.backend.Persistence.SeedRepository;

import java.util.List;

@SpringBootTest
@AutoConfigureMockMvc
class SeedsTests {
    @Autowired
    private MockMvc api;
    private SeedRepository seedRepository;

    public SeedsTests(@Autowired SeedRepository seedRepository) {
        this.seedRepository = seedRepository;
    }

    @BeforeEach
    public void setup() {
        seedRepository.deleteAll();
    }

    @Test
    public void returns_existing_seeds() throws Exception {

        seedRepository.saveAll(List.of(
                new Seed("Zanahoria", "Compra", null, null,
                        "Zanahoria de piel suave y color naranja rojizo. Buena productividad media cultivada a gran escala y con buena adaptación para almacenado."),
                new Seed("Berza", "Intercambio", null, null,
                        "Esta berza, también llamada col gallega o col forrajera. Sus hojas grandes y lisas no forman pella, siendo fácil de deshojar.")));

        api.perform(get("/api/seeds"))
                .andExpectAll(
                        status().isOk(),
                        jsonPath("$", hasSize(2)),
                        jsonPath("$[0].name", equalTo("Zanahoria")),
                        jsonPath("$[0].origin", equalTo("Compra")),
                        jsonPath("$[0].pick_up_date", equalTo(null)),
                        jsonPath("$[0].generation", equalTo(null)),
                        jsonPath("$[0].description", equalTo(
                                "Zanahoria de piel suave y color naranja rojizo. Buena productividad media cultivada a gran escala y con buena adaptación para almacenado.")),

                        jsonPath("$[1].name", equalTo("Berza")),
                        jsonPath("$[1].origin", equalTo("Intercambio")),
                        jsonPath("$[1].pick_up_date", equalTo(null)),
                        jsonPath("$[1].generation", equalTo(null)),
                        jsonPath("$[1].description", equalTo(
                                "Esta berza, también llamada col gallega o col forrajera. Sus hojas grandes y lisas no forman pella, siendo fácil de deshojar.")));
    }

    @Test
    public void returns_seeds_by_name() throws Exception {
        String query = "Zanahoria";

        seedRepository.saveAll(List.of(
                new Seed("Zanahoria", "Compra", null, null,
                        "Zanahoria de piel suave y color naranja rojizo. Buena productividad media cultivada a gran escala y con buena adaptación para almacenado.")
        // new Seed("Berza", "Intercambio", null, null, "Esta berza, también llamada col
        // gallega o col forrajera. Sus hojas grandes y lisas no forman pella, siendo
        // fácil de deshojar.")
        ));

        api.perform(get("/api/seeds/{query}", query))
                .andExpectAll(
                        status().isOk(),
                        jsonPath("$", hasSize(1)),
                        jsonPath("$[0].name", equalTo("Zanahoria")),
                        jsonPath("$[0].origin", equalTo("Compra")),
                        jsonPath("$[0].pick_up_date", equalTo(null)),
                        jsonPath("$[0].generation", equalTo(null)),
                        jsonPath("$[0].description", equalTo(
                                "Zanahoria de piel suave y color naranja rojizo. Buena productividad media cultivada a gran escala y con buena adaptación para almacenado.")));
    }

    @Test
    public void creates_new_seed() throws Exception {
        String requestBody = "{\"name\":\"Lechuga\",\"origin\":\"Compra\",\"description\":\"Lechuga iceberg, crujiente. De crecimiento rápido\"}";

        api.perform(post("/api/seeds")
                .contentType(MediaType.APPLICATION_JSON)
                .content(requestBody))
                .andExpectAll(
                        status().isCreated(),
                        jsonPath("$.name", equalTo("Lechuga")),
                        jsonPath("$.origin", equalTo("Compra")),
                        // jsonPath("$.pick_up_date", equalTo(null)),
                        // jsonPath("$.generation", equalTo(null)),
                        jsonPath("$.description", equalTo("Lechuga iceberg, crujiente. De crecimiento rápido")));
    }

    @Test
    public void delete_existing_seed_by_id() throws Exception{
        Seed savedSeed = seedRepository.save(new Seed("Espinaca", "Intercambio", null, null, "Espiga tarde, aguanta mucho tiempo sin florecer"));
        
        api.perform(delete("/api/seeds/" + savedSeed.getId()))
            .andExpect(status().isNoContent());

    }
}
