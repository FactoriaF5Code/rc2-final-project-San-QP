package com.appio.backend.Persistence;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name = "seeds")
public class Seed {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;
    private String name;
    private String origin;
    private Date pick_up_date;
    private Integer generation;
    private String description;

    public Seed(String name, String origin, Date pick_up_date, Integer generation, String description) {
        this.name = name;
        this.origin = origin;
        this.pick_up_date = pick_up_date;
        this.generation = generation;
        this.description = description;
    }

    public Seed() {
        
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

    public Date getPick_up_date() {
        return pick_up_date;
    }

    public void setPick_up_date(Date pick_up_date) {
        this.pick_up_date = pick_up_date;
    }

    public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public Integer getGeneration() {
        return generation;
    }

    public void setGeneration(Integer generation) {
        this.generation = generation;
    }
}