package com.appio.backend.Controllers;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.appio.backend.Persistence.Seed;
import com.appio.backend.Services.SeedService;

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
    public SeedResponse createSeed(@RequestBody SeedRequest requestSeed) {
        return seedService.createSeed(requestSeed);
    }

}
