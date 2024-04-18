package com.appio.backend.Persistence.Advert;

import com.appio.backend.Persistence.Seed.Seed;
import com.appio.backend.Persistence.User.User;
import com.fasterxml.jackson.annotation.JsonBackReference;

import jakarta.persistence.CascadeType;
import jakarta.persistence.Column;
import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.JoinColumn;
import jakarta.persistence.ManyToOne;
import jakarta.persistence.OneToOne;
import jakarta.persistence.Table;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
@Entity
@Table(name = "adverts")
public class Advert {
    
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    
    @OneToOne
    @JoinColumn(name = "seed_id" )
    @JsonBackReference
    private Seed seed;

    @Column(name = "advert_description")
    private String advert_description;

    @ManyToOne
    @JoinColumn(name = "user_id")
    private User user;

    @Column(name = "url_img")
    private String url_img;

    public Advert(
        Seed seed,
        String advert_description,
        User user,
        String url_img
    ) {
        this.seed = seed;
        this.advert_description = advert_description;
        this.user = user;
        this.url_img = url_img;
    }
}
