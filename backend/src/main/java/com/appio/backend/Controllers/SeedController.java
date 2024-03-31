package com.appio.backend.Controllers;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.RestController;

import com.appio.backend.Persistence.Seed;
import com.appio.backend.Persistence.SeedRepository;
import org.springframework.web.bind.annotation.GetMapping;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SeedController {

    private SeedRepository repository;

    public SeedController(@Autowired SeedRepository repository) {
        this.repository = repository;
    }

    @GetMapping("/api/seeds")
    public List<SeedResponse> showSeeds() {
        List<SeedResponse> seeds = new ArrayList<SeedResponse>();
        List<Seed> seedsInDataBaseSeeds = repository.findAll();
        for (Seed seed : seedsInDataBaseSeeds) {
            seeds.add(new SeedResponse(seed.getId(), seed.getName(), seed.getOrigin(), seed.getPick_up_date(), seed.getGeneration(), seed.getDescription()));
        }
        return seeds;
    }

}
