package com.appio.backend.Persistence;

import java.util.Date;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
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
}