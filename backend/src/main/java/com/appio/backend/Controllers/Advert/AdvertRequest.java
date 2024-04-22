package com.appio.backend.Controllers.Advert;


public class AdvertRequest {
    private Integer seed_id;
    private String advert_description;
    private Integer user_id;
    private String url_img;
    
    public AdvertRequest(
        Integer seed_id, 
        String advert_description,
        Integer user_id,
        String url_img
    ){
        this.seed_id = seed_id;
        this.advert_description = advert_description;
        this.user_id = user_id;
        this.url_img = url_img;
    }
}
