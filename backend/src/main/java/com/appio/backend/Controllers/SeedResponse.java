package com.appio.backend.Controllers;

import java.util.Date;
import java.util.Optional;

import com.appio.backend.Persistence.Seed;

import java.text.SimpleDateFormat;

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

    private String formatPickUpDate(Optional<Date> date) {
        if (date.isPresent()) {
            SimpleDateFormat formatter = new SimpleDateFormat("dd-MM-yyyy");
            return formatter.format(date.get());
        } else {
            return null;
        }
    }

    public Integer getId() {
        return id;
    }

    public void setId(Integer id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getOrigin() {
        return origin;
    }

    public void setOrigin(String origin) {
        this.origin = origin;
    }

    public Optional<Date> getPick_up_date() {
        return pick_up_date;
    }

    public void setPick_up_date(Optional<Date> pick_up_date) {
        this.pick_up_date = pick_up_date;
    }

    public String getFormattedPickUpDate() {
        return formattedPickUpDate;
    }

    public void setFormattedPickUpDate(String formattedPickUpDate) {
        this.formattedPickUpDate = formattedPickUpDate;
    }

    public Optional<Integer> getGeneration() {
        return generation;
    }

    public void setGeneration(Optional<Integer> generation) {
        this.generation = generation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
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
