package com.appio.backend.Services;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.appio.backend.Controllers.SeedRequest;
import com.appio.backend.Controllers.SeedResponse;
import com.appio.backend.Persistence.Seed;
import com.appio.backend.Persistence.SeedRepository;

@Service
public class SeedService {

    @Autowired
    private SeedRepository seedRepository;

    public List<SeedResponse> showSeeds() {
        List<SeedResponse> seeds = new ArrayList<>();
        List<Seed> seedsInDatabaseSeeds = seedRepository.findAll();

        for (Seed seed : seedsInDatabaseSeeds) {
            Optional<Date> pick_up_date = Optional.ofNullable(seed.getPick_up_date());
            Optional<Integer> generation = Optional.ofNullable(seed.getGeneration());
            seeds.add(new SeedResponse(
                    seed.getId(),
                    seed.getName(),
                    seed.getOrigin(),
                    pick_up_date,
                    generation,
                    seed.getDescription()));
        }

        return seeds;
    }

    // public List<SeedRepository> searchSeeds(String query) {
    //     List<Seed> seeds = seedRepository
    //             .findAllByNameContainingIgnoreCase(query);

    //     List<SeedResponse> seedResponses = new ArrayList<>();
    //     for (Seed seed : seeds) {
    //         Optional<Date> pick_up_date = Optional.ofNullable(seed.getPick_up_date());
    //         Optional<Integer> generation = Optional.ofNullable(seed.getGeneration());

    //         seedResponses.add(new SeedResponse(
    //             seed.getId(),
    //             seed.getName(),
    //             seed.getOrigin(),
    //             pick_up_date,
    //             generation,
    //             seed.getDescription()));
    //     }

    //     return seedResponses;
    // }

    public SeedResponse createSeed(@RequestBody SeedRequest requestSeed) {
        System.out.println("Datos recibidos del formulario:");
        System.out.println("Name: " + requestSeed.getName());
        System.out.println("Origin: " + requestSeed.getOrigin());
        System.out.println("Pick Up Date: " + requestSeed.getPick_up_date());
        System.out.println("Generation: " + requestSeed.getGeneration());
        System.out.println("Description: " + requestSeed.getDescription());

        Seed seed = new Seed(
                requestSeed.getName(),
                requestSeed.getOrigin(),
                requestSeed.getPick_up_date(),
                requestSeed.getGeneration(),
                requestSeed.getDescription());

        Seed savedSeed = seedRepository.save(seed);

        return new SeedResponse(
                savedSeed.getId(),
                savedSeed.getName(),
                savedSeed.getOrigin(),
                Optional.ofNullable(savedSeed.getPick_up_date()),
                Optional.ofNullable(savedSeed.getGeneration()),
                savedSeed.getDescription());
    }
}