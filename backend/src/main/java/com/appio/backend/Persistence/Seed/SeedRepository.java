package com.appio.backend.Persistence.Seed;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeedRepository extends JpaRepository<Seed, Integer> {
    List<Seed> findAllByNameContainingIgnoreCase(String Name);
}
