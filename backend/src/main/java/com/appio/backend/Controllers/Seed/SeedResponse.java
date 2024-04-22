package com.appio.backend.Controllers.Seed;

import java.util.Date;
import java.util.Optional;

import com.appio.backend.Persistence.Seed.Seed;

import java.text.SimpleDateFormat;

import lombok.Getter;
import lombok.Setter;


@Getter
@Setter
public class SeedResponse {
    private Integer id;
    private String name;
    private String origin;
    private Optional<Date> pick_up_date;
    private String formattedPickUpDate;
    private Optional<Integer> generation;
    private String description;

    public SeedResponse(Integer id, String name, String origin,
            Optional<Date> pick_up_date, Optional<Integer> generation,
            String description) {
        this.id = id;
        this.name = name;
        this.origin = origin;
        this.pick_up_date = pick_up_date;
        this.formattedPickUpDate = formatPickUpDate(pick_up_date);
        this.generation = generation;
        this.description = description;
    }

    public SeedResponse() {
    }

    private String formatPickUpDate(Optional<Date> date) {
        if (date.isPresent()) {
            SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
            return formatter.format(date.get());
        } else {
            return null;
        }
    }

    public static SeedResponse from(Seed seed) {
        return new SeedResponse(seed.getId(),
                seed.getName(),
                seed.getOrigin(),
                Optional.ofNullable(seed.getPick_up_date()),
                Optional.ofNullable(seed.getGeneration()),
                seed.getDescription());
    }

}
