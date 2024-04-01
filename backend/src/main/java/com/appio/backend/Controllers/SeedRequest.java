package com.appio.backend.Controllers;

import java.util.Date;

public class SeedRequest {
    private String name;
    private String origin;
    private Date pick_up_date;
    private Integer generation;
    private String description;

    public SeedRequest(String name, String origin, Date pick_up_date, Integer generation, String description) {
        this.name = name;
        this.origin = origin;
        this.pick_up_date = pick_up_date;
        this.generation = generation;
        this.description = description;
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

    public Date getPick_up_date() {
        return pick_up_date;
    }

    public void setPick_up_date(Date pick_up_date) {
        this.pick_up_date = pick_up_date;
    }

    public Integer getGeneration() {
        return generation;
    }

    public void setGeneration(Integer generation) {
        this.generation = generation;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
}
