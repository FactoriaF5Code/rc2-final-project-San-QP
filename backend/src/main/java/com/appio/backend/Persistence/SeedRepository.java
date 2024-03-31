package com.appio.backend.Persistence;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface SeedRepository extends JpaRepository<Seed, Integer> {
    
}
