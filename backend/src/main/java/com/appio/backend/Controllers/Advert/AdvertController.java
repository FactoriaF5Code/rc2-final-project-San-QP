package com.appio.backend.Controllers.Advert;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RestController;

import com.appio.backend.Services.Advert.AdvertService;

@RestController
@CrossOrigin(origins = "http://localhost:5173")
public class AdvertController {
    
    @Autowired
    private AdvertService advertService;

    @GetMapping("/api/adverts")
    public List<AdvertResponse> showAdverts(){
        return advertService.showAdverts();
    }

    @GetMapping("/api/adverts/{id}")
    public AdvertResponse showAdvertById(@PathVariable Integer id){
        return advertService.showAdvertById(id);
    }

}
