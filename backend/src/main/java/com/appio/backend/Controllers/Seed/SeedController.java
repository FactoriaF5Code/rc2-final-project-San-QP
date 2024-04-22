package com.appio.backend.Controllers.Seed;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.http.HttpStatus;

import com.appio.backend.Persistence.Seed.Seed;
import com.appio.backend.Persistence.Seed.SeedRepository;
import com.appio.backend.Services.Seed.SeedService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class SeedController {

    @Autowired
    private SeedService seedService;

    @GetMapping("/api/seeds")
    public List<SeedResponse> showSeeds() {
        return seedService.showSeeds();
    }

    @GetMapping("api/seeds/{query}")
    public List<Seed> searchSeeds(@PathVariable String query) {
        return seedService.searchSeeds(query);
    }

    @PostMapping("/api/seeds")
    @ResponseStatus(HttpStatus.CREATED)
    public SeedResponse createSeed(@RequestBody SeedRequest requestSeed) {
        return seedService.createSeed(requestSeed);
    }

    @DeleteMapping("/api/seeds/{id}")
    @ResponseStatus(HttpStatus.NO_CONTENT)
    public void deleteCard(@PathVariable int id) {
        seedService.deleteSeed(id);
    }

    private SeedRepository repository;

    public SeedController(@Autowired SeedRepository repository) {
        this.repository = repository;
    }

}
