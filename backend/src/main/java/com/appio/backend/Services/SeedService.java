package com.appio.backend.Services;

import java.util.List;

import java.util.stream.Collectors;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.RequestBody;

import com.appio.backend.Controllers.SeedRequest;
import com.appio.backend.Controllers.SeedResponse;
import com.appio.backend.Persistence.Seed;
import com.appio.backend.Persistence.SeedRepository;

@Service
public class SeedService {

    private final Logger logger = LoggerFactory.getLogger(SeedService.class);

    @Autowired
    private SeedRepository seedRepository;

    public List<SeedResponse> showSeeds() {
        // convert List<Seed> into List<SeedResponse>
        return seedRepository.findAll().stream()
                .map(SeedResponse::from)
                .collect(Collectors.toList());
    }

    public List<Seed> searchSeeds(String query) {
        return seedRepository
                .findAllByNameContainingIgnoreCase(query);
    }

    @SuppressWarnings("static-access")
    public SeedResponse createSeed(@RequestBody SeedRequest seedRequest) {
        logger.info("Datos recibidos del formulario: %s".format(seedRequest.toString()));
        

        Seed seed = seedRequest.toSeed();

        Seed savedSeed = seedRepository.save(seed);

        return SeedResponse.from(savedSeed);
    }
}