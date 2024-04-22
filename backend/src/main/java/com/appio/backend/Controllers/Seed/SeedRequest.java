package com.appio.backend.Controllers.Seed;


import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

import com.appio.backend.Persistence.Seed.Seed;

import lombok.Getter;
import lombok.Setter;

@Getter
@Setter
public class SeedRequest {
    private String name;
    private String origin;
    private Date pick_up_date;
    private Integer generation;
    private String description;

    public SeedRequest(String name, String origin, String pick_up_date, Integer generation, String description) {
        this.name = name;
        this.origin = origin;
        if (pick_up_date != null && !pick_up_date.isEmpty()) {
            try {
                this.pick_up_date = new SimpleDateFormat("yyyy-MM-dd").parse(pick_up_date);
            } catch (ParseException e) {
                // Manejar la excepción aquí, por ejemplo, imprimir un mensaje de error
                System.err.println("Error al analizar la fecha: " + e.getMessage());
            }
        }
        this.generation = generation;
        this.description = description;
    }


    @Override
    public String toString() {
        return "SeedRequest [name=" + name + ", origin=" + origin + ", pick_up_date=" + pick_up_date + ", generation="
                + generation + ", description=" + description + "]";
    }


    public Seed toSeed() {
        return new Seed(
            this.getName(),
            this.getOrigin(),
            this.getPick_up_date(),
            this.getGeneration(),
            this.getDescription());
    }


    
}
