package com.appio.backend.Controllers.Advert;

import com.appio.backend.Persistence.Advert.Advert;
import com.appio.backend.Persistence.Seed.Seed;
import com.appio.backend.Persistence.User.User;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class AdvertResponse {
    private Integer id;
    private Seed seed;
    private String advert_description;
    private User user;
    private String url_img;

    public AdvertResponse(
        Integer id,
        Seed seed,
        String advert_description,
        User user,
        String url_img
    ) {
        this.id = id;
        this.seed = seed;
        this.advert_description = advert_description;
        this.user = user;
        this.url_img = url_img;
    }

    public static AdvertResponse from(Advert advert) {
        return new AdvertResponse(
                advert.getId(),
                advert.getSeed(),
                advert.getAdvert_description(),
                advert.getUser(),
                advert.getUrl_img()
                );
    }

}
